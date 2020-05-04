import { useSelector, shallowEqual } from 'react-redux';

export const useLocale = () => {
  return useSelector(
    ({ auth: { user, guestLocale } }) => ({
      locale: user?.locale || guestLocale,
    }),
    shallowEqual
  );
};
