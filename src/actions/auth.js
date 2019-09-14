import * as api from 'api/auth';
import { SIGN_IN, SIGN_OUT, SIGN_UP } from './types';

export const signUp = (user) => ({
  type: SIGN_UP,
  payload: api.signUp(user),
});

export const signIn = (credentials) => ({
  type: SIGN_IN,
  payload: api.signIn(credentials),
});

export const signOut = () => ({
  type: SIGN_OUT,
  payload: api.signOut(),
});
