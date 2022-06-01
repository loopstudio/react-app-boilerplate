import { useContext } from 'react';

import { GuestLocaleContext, ContextData } from '../context/guestLocale';

export const useGuestLocale: () => ContextData | null = () =>
  useContext(GuestLocaleContext);
