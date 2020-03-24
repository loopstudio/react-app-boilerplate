import { useSelector, shallowEqual } from 'react-redux';

export const useAuthentication = () =>
  useSelector(
    ({ auth: { user, userSession } }) => ({
      isAuthenticated: userSession !== null,
      user,
    }),
    shallowEqual
  );
