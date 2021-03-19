import axios from 'axios';
import applyCaseMiddleware from 'axios-case-converter';

const httpClient = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: { accept: 'application/json' },
  params: {},
});

export default applyCaseMiddleware(httpClient);
