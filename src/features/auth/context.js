import React, {
  createContext,
  useState,
  useMemo,
  useCallback,
  useEffect,
  useImperativeHandle,
} from 'react';
import AuthService from './services/AuthService';

export const AuthContext = createContext();

const initialState = {
  user: null,
  session: null,
  isLoading: false,
};

export const AuthRef = React.createRef();

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children, baseApiUrl, config }) => {
  const [state, setState] = useState(initialState);

  useImperativeHandle(AuthRef, () => authActions);
  const authActions = useMemo(
    () => ({
      getSession: () => state.session,
    }),
    []
  );

  // TODO: check if we want this here, otherwise remove
  // const [guestLocale, setGuestLocale] = useState(
  //   navigator.language.substr(0, 2)
  // );

  useEffect(() => {
    const validateSession = async () => {
      const storedSession = JSON.parse(localStorage.getItem('session'));
      if (storedSession) {
        const response = await AuthService.validateToken();
      }
      setUser;
    };
  }, []);

  if (isLoading) {
    return <Spinner />;
  }

  const signIn = useCallback(async (values) => {
    const response = await AuthService.signIn(values);
    const {
      headers: { accessToken, client, uid },
      data,
    } = response;

    setSession({ accessToken, client, uid });
    setUser(data.user);

    return response;
  }, []);

  const signOut = useCallback(async () => {
    setSession(null);
    setUser(null);
    return AuthService.signOut();
  }, []);

  useEffect(() => {
    if (user && session) {
      localStorage.setItem('auth', JSON.stringify({ session, user }));
    } else {
      localStorage.removeItem('auth');
    }
  }, [user, session]);

  return (
    <AuthContext.Provider
      value={{
        session,
        user,
        signIn,
        signOut,
        isLoading,
        isAuthenticated: user !== null,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
