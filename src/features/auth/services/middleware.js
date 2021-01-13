// import { AuthRef } from 'features/auth';

let requestInterceptor;
let responseInterceptor;

export const applyInterceptors = (client, session) => {
  requestInterceptor = client.interceptors.request.use((config) => {
    if (session) {
      Object.assign(config.headers, session);
    } else {
      Object.assign(
        config.params
        // { locale: guestLocale }
      );
    }

    return config;
  });

  responseInterceptor = client.interceptors.response.use(
    (response) => response,
    (error) => {
      console.log('pepe', error.response);
      // why errors behave like this on signup?
      if (!error.response) {
        return Promise.reject({ errors: ['Connection error'] });
      }

      if (error.response.status === 401) {
        // AuthRef.current.clearSession();
      }

      return Promise.reject(error.response.data);
    }
  );

  return client;
};

export const clearInterceptors = (client) => {
  if (requestInterceptor) {
    client.interceptors.request.eject(requestInterceptor);
  }

  if (responseInterceptor) {
    client.interceptors.response.eject(requestInterceptor);
  }
};
