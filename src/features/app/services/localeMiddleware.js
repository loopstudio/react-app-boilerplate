export const applyLocaleInterceptor = (client, locale) => {
  return client.interceptors.request.use((request) => {
    alert(JSON.stringify(request.params, null, 2));
    Object.assign(request.params, { locale });
    alert(JSON.stringify(request.params, null, 2));
    return request;
  });
};

export const clearLocaleInterceptor = (client, interceptor) => {
  client.interceptors.request.eject(interceptor);
};
