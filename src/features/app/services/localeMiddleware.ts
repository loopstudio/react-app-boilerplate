import httpClient from './httpClient';

export const applyLocaleInterceptor = (
  isAuthenticated: boolean,
  locale: string
) => {
  return httpClient.interceptors.request.use((request) => {
    if (!isAuthenticated) {
      Object.assign(request.params, { locale });
    }

    return request;
  });
};

export const clearLocaleInterceptor = (interceptor: number) => {
  httpClient.interceptors.request.eject(interceptor);
};
