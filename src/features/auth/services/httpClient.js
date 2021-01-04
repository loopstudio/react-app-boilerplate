import axios from 'axios';
import applyCaseMiddleware from 'axios-case-converter';

// import authMiddleware from 'features/auth/services/middlewares/auth';

const httpClient = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: { accept: 'application/json' },
  params: {},
});

// TODO: determine way of injecting headers and signing out on 403
// export const applyMiddlewares = (client, store) =>
//   authMiddleware(applyCaseMiddleware(client), store);

export default applyCaseMiddleware(httpClient);
