import { createContext, useState, useEffect } from 'react';
import { useAuth } from '@loopstudio/react-auth';
import httpClient from '../services/httpClient';
import {
  applyLocaleInterceptor,
  clearLocaleInterceptor,
} from '../services/localeMiddleware';

export const GuestLocaleContext = createContext();

const STORAGE_KEY = 'guest_locale';

const getDefaultGuestLocale = () =>
  localStorage.getItem(STORAGE_KEY) || navigator.language.substr(0, 2);

// eslint-disable-next-line react/prop-types
export const GuestLocaleProvider = ({ children }) => {
  const { isAuthenticated } = useAuth();
  const [guestLocale, setGuestLocale] = useState(getDefaultGuestLocale);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, guestLocale);
    const interceptor = applyLocaleInterceptor(
      httpClient,
      isAuthenticated,
      guestLocale
    );

    return () => clearLocaleInterceptor(httpClient, interceptor);
  }, [isAuthenticated, guestLocale]);

  return (
    <GuestLocaleContext.Provider
      value={{
        guestLocale,
        setGuestLocale,
      }}
    >
      {children}
    </GuestLocaleContext.Provider>
  );
};
