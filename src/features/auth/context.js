import React, { createContext, useState, useCallback, useEffect } from 'react';

import { useGuestLocale } from 'features/app/hooks/guestLocale';
import AuthService from './services/AuthService';
import { applyInterceptors, clearInterceptors } from './services/middleware';

export const AuthContext = createContext();

const defaultState = {
  user: null,
  session: null,
  isLoading: false,
};

const initialState = () => {
  const storedSession = JSON.parse(localStorage.getItem('session'));
  if (storedSession) {
    return { ...defaultState, session: storedSession, isLoading: true };
  }
  return defaultState;
};

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children, prepopulatedState, httpClient }) => {
  const [state, setState] = useState(prepopulatedState || initialState);
  const { user, session, isLoading } = state;

  const { guestLocale } = useGuestLocale();

  const validateSession = useCallback(async () => {
    if (isLoading && session) {
      try {
        const response = await AuthService.validateToken();
        const {
          headers: { accessToken, client, uid },
          data,
        } = response;

        setState({
          session: { accessToken, client, uid },
          user: data.user,
          isLoading: false,
        });
      } catch {
        setState(defaultState);
      }
    }
  }, [isLoading, session]);

  const signIn = useCallback(async (values) => {
    const response = await AuthService.signIn(values);
    const {
      headers: { accessToken, client, uid },
      data,
    } = response;

    setState({
      session: { accessToken, client, uid },
      user: data.user,
      isLoading: false,
    });

    return response;
  }, []);

  const signUp = useCallback(async (values) => {
    const response = await AuthService.signUp(values);
    const {
      headers: { accessToken, client, uid },
      data,
    } = response;

    setState({
      session: { accessToken, client, uid },
      user: data.user,
      isLoading: false,
    });

    return response;
  }, []);

  const updateUser = useCallback(async (values, passwordCheck = null) => {
    const response = await AuthService.updateUser(values, passwordCheck);
    const { data } = response;

    setState((prevState) => ({ ...prevState, user: data.user }));

    return response;
  }, []);

  const signOut = useCallback(async () => {
    setState(defaultState);
    return AuthService.signOut();
  }, []);

  const clearSession = useCallback(async () => {
    setState(defaultState);
  }, []);

  const requestPasswordReset = useCallback(
    (email) => AuthService.requestPasswordReset(email),
    []
  );

  const verifyPasswordReset = useCallback(
    (resetPasswordToken) => AuthService.verifyPasswordReset(resetPasswordToken),
    []
  );

  const resetPassword = useCallback(async (password, resetPasswordToken) => {
    const response = await AuthService.resetPassword(
      password,
      resetPasswordToken
    );
    const {
      headers: { accessToken, client, uid },
      data,
    } = response;

    setState({
      session: { accessToken, client, uid },
      user: data.user,
      isLoading: false,
    });

    return response;
  }, []);

  useEffect(() => {
    AuthService.setHttpClient(httpClient);
  }, [httpClient]);

  useEffect(() => {
    const interceptors = applyInterceptors(
      httpClient,
      session,
      clearSession,
      guestLocale
    );

    return () => clearInterceptors(httpClient, interceptors);
  }, [httpClient, session, clearSession, guestLocale]);

  useEffect(() => {
    validateSession();
  }, [validateSession]);

  useEffect(() => {
    if (session) {
      localStorage.setItem('session', JSON.stringify(session));
    } else {
      localStorage.removeItem('session');
    }
  }, [session]);

  return (
    <AuthContext.Provider
      value={{
        isLoading,
        isAuthenticated: user !== null,
        session,
        user,
        signIn,
        signUp,
        updateUser,
        signOut,
        clearSession,
        requestPasswordReset,
        verifyPasswordReset,
        resetPassword,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
