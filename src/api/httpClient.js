import axios from 'axios';
import humps from 'humps';

import { signOut } from 'actions/auth';
import { store } from 'store';

const httpClient = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  transformRequest: [
    (data) => humps.decamelizeKeys(data),
    ...axios.defaults.transformRequest,
  ],
  transformResponse: [
    ...axios.defaults.transformResponse,
    (data) => humps.camelizeKeys(data),
  ],
});

httpClient.interceptors.request.use((config) => {
  const { userSession } = store.getState().auth;

  if (userSession) {
    const { accessToken, uid, client } = userSession;

    Object.assign(config.headers, {
      client,
      uid,
      'access-token': accessToken,
    });
  }

  return config;
});

httpClient.interceptors.response.use(
  (response) => response,
  ({ response }) => {
    if (!response) {
      throw { errors: ['Connection error'] };
    }

    if (response.status === 401) {
      store.dispatch(signOut());
    }

    throw response.data;
  }
);

export default httpClient;
