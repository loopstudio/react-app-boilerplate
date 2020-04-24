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
  guestLocale: navigator.language.substr(0, 2),
};

const updateUser = (draftState, payload) => {
  const {
    headers: { client, uid, 'access-token': accessToken },
    data,
  } = payload;

  draftState.user = data.user;
  draftState.userSession = {
    accessToken,
    client,
    uid,
  };
};

const signOut = () => ({
  ...initialState,
});

const setGuestLocale = (draftState, payload) => {
  draftState.guestLocale = payload;
};

const handlers = {
  [`${Types.SIGN_UP}_${Fulfilled}`]: updateUser,
  [`${Types.SIGN_IN}_${Fulfilled}`]: updateUser,
  [`${Types.UPDATE_USER}_${Fulfilled}`]: updateUser,
  [`${Types.SIGN_OUT}_${Pending}`]: signOut,
  [Types.SET_GUEST_LOCALE]: setGuestLocale,
};

const authReducer = createReducer(initialState, handlers);

const authPersistConfig = {
  storage,
  key: 'auth',
};

export default persistReducer(authPersistConfig, authReducer);
