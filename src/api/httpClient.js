import axios from 'axios';
import humps from 'humps';

import { signOut } from 'actions/auth';
import { store } from 'store';

const axiosClient = () => {
  const { userSession } = store.getState().auth;
  let headers = {};

  if (userSession) {
    const { accessToken, tokenType, uid, client } = userSession;
    headers = {
      'access-token': accessToken,
      'token-type': tokenType,
      uid,
      client,
    };
  }

  const client = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers,
    transformRequest: [
      (data) => humps.decamelizeKeys(data),
      ...axios.defaults.transformRequest,
    ],
    transformResponse: [
      ...axios.defaults.transformResponse,
      (data) => humps.camelizeKeys(data),
    ],
  });

  client.interceptors.response.use(
    (response) => response,
    (error) => {
      if (!error.response) {
        return Promise.reject({ errors: ['Connection error'] });
      }

      if (error.response.status === 401 && userSession) {
        store.dispatch(signOut());
      }

      return Promise.reject(error.response.data);
    }
  );

  return client;
};

export default axiosClient;
