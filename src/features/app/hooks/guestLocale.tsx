import { useContext } from 'react';

import { GuestLocaleContext } from '../context/guestLocale';

export const useGuestLocale = () => useContext(GuestLocaleContext);
