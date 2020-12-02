import httpAdapter from 'axios/lib/adapters/http';

import httpClient from 'features/auth/services/httpClient';

beforeAll(() => {
  httpClient.defaults.adapter = httpAdapter;
});

afterEach(() => {
  httpClient.interceptors.request.handlers = [];
  httpClient.interceptors.response.handlers = [];
});
