import React, { createContext, useState, useCallback, useEffect } from 'react';
import Loading from 'features/app/components/Loading';
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
export const AuthProvider = ({ httpClient, children }) => {
  const [state, setState] = useState(initialState);
  const { user, session, isLoading } = state;

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

  const signOut = useCallback(async () => {
    setState(defaultState);
    return AuthService.signOut();
  }, []);

  useEffect(() => {
    AuthService.setHttpClient(httpClient);
  }, [httpClient]);

  useEffect(() => {
    applyInterceptors(httpClient, session);
    return () => clearInterceptors(httpClient);
  }, [httpClient, session]);

  useEffect(() => {
    validateSession();
  }, [validateSession]);

  useEffect(() => {});

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
        session,
        user,
        signIn,
        signUp,
        signOut,
        isLoading,
        isAuthenticated: user !== null,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
