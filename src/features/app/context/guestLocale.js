import React, { createContext, useState, useEffect } from 'react';

export const GuestLocaleContext = createContext();

const STORAGE_KEY = 'guest_locale';

const getDefaultGuestLocale = () =>
  localStorage.getItem(STORAGE_KEY) || navigator.language.substr(0, 2);

// eslint-disable-next-line react/prop-types
export const GuestLocaleProvider = ({ children }) => {
  const [guestLocale, setGuestLocale] = useState(getDefaultGuestLocale);

  useEffect(() => localStorage.setItem(STORAGE_KEY, guestLocale), [
    guestLocale,
  ]);

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
