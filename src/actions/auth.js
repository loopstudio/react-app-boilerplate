import AuthService from 'api/AuthService';
import Types from './types';

export const signUp = (user) => ({
  type: Types.SIGN_UP,
  payload: AuthService.signUp(user),
});

export const signIn = (credentials) => ({
  type: Types.SIGN_IN,
  payload: AuthService.signIn(credentials),
});

export const signOut = () => ({
  type: Types.SIGN_OUT,
  payload: AuthService.signOut(),
});
