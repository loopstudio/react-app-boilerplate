import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import { ActionType } from 'redux-promise-middleware';

import Types from 'actions/types';

const { Fulfilled, Pending } = ActionType;

const initialState = {
  user: null,
  userSession: null,
};

const signUpFulfilled = (state, { headers, data: { user } }) => {
  const { client, uid, 'access-token': accessToken } = headers;

  return { ...state, user, userSession: { accessToken, client, uid } };
};

const signInFulfilled = (state, { headers, data: { user } }) => {
  const { client, uid, 'access-token': accessToken } = headers;

  return { ...state, user, userSession: { accessToken, client, uid } };
};

const signOut = () => ({
  ...initialState,
});

const handlers = {
  [`${Types.SIGN_UP}_${Fulfilled}`]: signUpFulfilled,
  [`${Types.SIGN_IN}_${Fulfilled}`]: signInFulfilled,
  [`${Types.SIGN_OUT}_${Pending}`]: signOut,
};

const authReducer = (state = initialState, { type, payload }) => {
  const handler = handlers[type];

  return handler ? handler(state, payload) : state;
};

const authPersistConfig = {
  storage,
  key: 'auth',
};

export default persistReducer(authPersistConfig, authReducer);
