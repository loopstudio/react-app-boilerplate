import axios from 'axios';
import humps from 'humps';

import { clearSession } from 'actions/auth';
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
    Object.assign(config.headers, { client, uid, 'access-token': accessToken });
  }

  return config;
});

httpClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (!error.response) {
      return Promise.reject({ errors: ['Connection error'] });
    }

    if (error.response.status === 401) {
      store.dispatch(clearSession());
    }

    return Promise.reject(error.response.data);
  }
);

export default httpClient;
