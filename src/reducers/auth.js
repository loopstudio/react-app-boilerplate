import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import { ActionType } from 'redux-promise-middleware';

import { SIGN_UP, SIGN_IN, SIGN_OUT } from 'actions/types';

const { Pending, Fulfilled, Rejected } = ActionType;

const initialState = {
  user: null,
  userSession: null,
  isLoading: false,
};

const signUpPending = (state) => ({
  ...state,
  isLoading: true,
});

const signUpFulfilled = (state, { data }) => ({
  ...state,
  user: data.user,
  isLoading: false,
});

const signUpRejected = (state) => ({
  ...state,
  isLoading: false,
});

const signInPending = (state) => ({
  ...state,
  isLoading: true,
});

const signInFulfilled = (state, { headers, data }) => {
  const {
    'access-token': accessToken,
    'token-type': tokenType,
    client,
    uid,
  } = headers;

  return {
    ...state,
    user: data.user,
    userSession: { accessToken, tokenType, client, uid },
    isLoading: false,
  };
};

const signInRejected = (state) => ({
  ...state,
  isLoading: false,
});

const signOutFulfilled = () => ({
  ...initialState,
});

const handlers = {
  [`${SIGN_UP}_${Pending}`]: signUpPending,
  [`${SIGN_UP}_${Fulfilled}`]: signUpFulfilled,
  [`${SIGN_UP}_${Rejected}`]: signUpRejected,
  [`${SIGN_IN}_${Pending}`]: signInPending,
  [`${SIGN_IN}_${Fulfilled}`]: signInFulfilled,
  [`${SIGN_IN}_${Rejected}`]: signInRejected,
  [`${SIGN_OUT}_${Fulfilled}`]: signOutFulfilled,
};

const authReducer = (state = initialState, { type, payload }) => {
  const handler = handlers[type];
  return handler ? handler(state, payload) : state;
};

const authPersistConfig = {
  storage,
  key: 'auth',
  blacklist: ['isLoading'],
};

export default persistReducer(authPersistConfig, authReducer);
