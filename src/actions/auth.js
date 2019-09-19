import * as api from 'api/auth';
import Types from './types';

export const signUp = (user) => ({
  type: Types.SIGN_UP,
  payload: api.signUp(user),
});

export const signIn = (credentials) => ({
  type: Types.SIGN_IN,
  payload: api.signIn(credentials),
});

export const signOut = () => ({
  type: Types.SIGN_OUT,
  payload: api.signOut(),
});
