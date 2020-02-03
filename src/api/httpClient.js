import axios from 'axios';
import humps from 'humps';

import { signOut } from 'actions/auth';
import { store } from 'store';

const axiosClient = () => {
  const { userSession } = store.getState().auth;
  let headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };

  if (userSession) {
    const { accessToken, uid, client } = userSession;
    headers = {
      ...headers,
      client,
      uid,
      'access-token': accessToken,
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
    ({ response }) => {
      if (!response) {
        throw { errors: ['Connection error'] };
      }

      if (response.status === 401 && userSession) {
        store.dispatch(signOut());
      }

      throw response.data;
    }
  );

  return client;
};

export default axiosClient;
