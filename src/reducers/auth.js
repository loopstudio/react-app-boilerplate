/* eslint-disable no-param-reassign */

import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import { ActionType } from 'redux-promise-middleware';

import Types from 'actions/types';
import createReducer from 'reducers/createReducer';

const { Fulfilled, Pending } = ActionType;

const initialState = {
  user: null,
  userSession: null,
};

const updateUser = (draftState, action) => {
  const { client, uid, 'access-token': accessToken } = action.headers;

  draftState.user = action.data.user;
  draftState.userSession = {
    accessToken,
    client,
    uid,
  };
};

const signUpFulfilled = (draftState, action) => {
  updateUser(draftState, action);
};

const signInFulfilled = (draftState, action) => {
  updateUser(draftState, action);
};

const signOut = () => ({
  ...initialState,
});

const handlers = {
  [`${Types.SIGN_UP}_${Fulfilled}`]: signUpFulfilled,
  [`${Types.SIGN_IN}_${Fulfilled}`]: signInFulfilled,
  [`${Types.SIGN_OUT}_${Pending}`]: signOut,
};

const authReducer = createReducer(initialState, handlers);

const authPersistConfig = {
  storage,
  key: 'auth',
};

export default persistReducer(authPersistConfig, authReducer);
