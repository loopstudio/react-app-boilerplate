import Types from 'features/auth/types';
import AuthService from 'features/auth/services/AuthService';

export const clearSession = () => ({
  type: Types.CLEAR_SESSION,
  payload: null,
});

export const resetPassword = ({ password, token }) => ({
  type: Types.RESET_PASSWORD,
  payload: AuthService.resetPassword(password, token),
});

export const setGuestLocale = (locale) => ({
  type: Types.SET_GUEST_LOCALE,
  payload: { locale },
});

export const signIn = (credentials) => ({
  type: Types.SIGN_IN,
  payload: AuthService.signIn(credentials),
});

export const signOut = () => ({
  type: Types.SIGN_OUT,
  payload: AuthService.signOut(),
});

export const signUp = (user) => ({
  type: Types.SIGN_UP,
  payload: AuthService.signUp(user),
});

export const updateUser = (user) => ({
  type: Types.UPDATE_USER,
  payload: AuthService.updateUser(user),
});
