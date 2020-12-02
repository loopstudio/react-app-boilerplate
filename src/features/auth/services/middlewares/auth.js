import { clearSession } from 'features/auth';

const authenticator = (httpClient, store) => {
  httpClient.interceptors.request.use((config) => {
    const { guestLocale, session } = store.getState().auth;

    if (session) {
      Object.assign(config.headers, session);
    } else {
      Object.assign(config.params, { locale: guestLocale });
    }

    return config;
  });

  httpClient.interceptors.response.use(
    (response) => response,
    (error) => {
      if (!error.response) {
        return Promise.reject({ errors: ['Connection error'] });
      }

      if (error.response.status === 401) {
        store.dispatch(clearSession());
      }

      return Promise.reject(error.response.data);
    }
  );
};

export default authenticator;
