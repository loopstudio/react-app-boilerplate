import httpClient from './httpClient';

export const applyLocaleInterceptor = (isAuthenticated, locale) => {
  return httpClient.interceptors.request.use((request) => {
    if (!isAuthenticated) {
      Object.assign(request.params, { locale });
    }

    return request;
  });
};

export const clearLocaleInterceptor = (interceptor) => {
  httpClient.interceptors.request.eject(interceptor);
};
