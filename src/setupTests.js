import httpAdapter from 'axios/lib/adapters/http';
import { library } from '@fortawesome/fontawesome-svg-core';
import httpClient from 'features/app/services/httpClient';
import icons from 'assets/icons';

beforeAll(() => {
  httpClient.defaults.adapter = httpAdapter;
  library.add(icons);
});

beforeEach(() => {
  localStorage.clear();
});
