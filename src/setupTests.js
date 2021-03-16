import httpAdapter from 'axios/lib/adapters/http';
import httpClient from 'features/app/services/httpClient';

beforeAll(() => {
  httpClient.defaults.adapter = httpAdapter;
});

beforeEach(() => {
  localStorage.clear();
});
