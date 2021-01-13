import axios from 'axios';
import applyCaseMiddleware from 'axios-case-converter';

// import authMiddleware from 'features/auth/services/middlewares/auth';

const httpClient = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: { accept: 'application/json' },
  params: {},
});

// const applyMiddlewares = (client) =>
//   authMiddleware(applyCaseMiddleware(client));

// class HTTPCLient {
//   session = null;

//   constructor() {
//     this.subscriptionClient = subscriptionClient;
//   }
// }

export default applyCaseMiddleware(httpClient);
