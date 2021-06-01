export const applyLocaleInterceptor = (client, isAuthenticated, locale) => {
  return client.interceptors.request.use((request) => {
    if (!isAuthenticated) {
      Object.assign(request.params, { locale });
    }

    return request;
  });
};

export const clearLocaleInterceptor = (client, interceptor) => {
  client.interceptors.request.eject(interceptor);
};
