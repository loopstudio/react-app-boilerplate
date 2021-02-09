import React, { createContext, useState, useEffect } from 'react';

export const GuestLocaleContext = createContext();

const STORAGE_KEY = 'RAB_GUEST_LOCALE';
const DEFAULT_GUEST_LOCALE = 'en';

// TODO: Util?
const persistState = (state) => {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
};

export const getIntialState = () => {
  const storedGuestLocale = window.localStorage.getItem(STORAGE_KEY);
  try {
    if (!storedGuestLocale) {
      return DEFAULT_GUEST_LOCALE;
    }
    return JSON.parse(storedGuestLocale);
  } catch (e) {
    console.error(`
      Error loading state: ${STORAGE_KEY}. Using default guest locale: ${DEFAULT_GUEST_LOCALE}.
    `);
    return DEFAULT_GUEST_LOCALE;
  }
};

// eslint-disable-next-line react/prop-types
export const GuestLocaleProvider = ({ children }) => {
  const [guestLocale, setGuestLocale] = useState(getIntialState);

  useEffect(() => persistState(guestLocale), [guestLocale]);

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
