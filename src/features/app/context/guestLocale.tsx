import {
  createContext,
  useState,
  useEffect,
  SetStateAction,
  Dispatch,
} from 'react';
import { useAuth } from 'loop-react-auth';
import {
  applyLocaleInterceptor,
  clearLocaleInterceptor,
} from '../services/localeMiddleware';

export interface ContextData {
  guestLocale: string;
  setGuestLocale: Dispatch<SetStateAction<string>>;
}

export const GuestLocaleContext = createContext<ContextData | null>(null);

const STORAGE_KEY = 'guest_locale';

const getDefaultGuestLocale = () =>
  localStorage.getItem(STORAGE_KEY) || navigator.language.substr(0, 2);

// eslint-disable-next-line react/prop-types
export const GuestLocaleProvider = ({ children }: any) => {
  const { isAuthenticated } = useAuth();
  const [guestLocale, setGuestLocale] = useState(getDefaultGuestLocale);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, guestLocale);
    const interceptor = applyLocaleInterceptor(isAuthenticated, guestLocale);

    return () => clearLocaleInterceptor(interceptor);
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
