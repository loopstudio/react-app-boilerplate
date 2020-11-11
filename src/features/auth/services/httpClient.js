import axios from 'axios';
import applyCaseMiddleware from 'axios-case-converter';

import authMiddleware from 'features/auth/services/middlewares/auth';

const httpClient = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: { accept: 'application/json' },
  params: {},
});

export const applyMiddlewares = (client, store) =>
  authMiddleware(applyCaseMiddleware(client), store);

export default httpClient;
