import { useSelector } from 'react-redux';

export const useAuthentication = () =>
  useSelector(({ auth: { session } }) => session !== null);

export const useUser = () => useSelector(({ auth: { user } }) => user);
