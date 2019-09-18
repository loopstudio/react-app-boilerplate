import axiosClient from './httpClient';

export const signUp = (user) => axiosClient().post('/users', user);

export const signIn = (credentials) => axiosClient().post('/users/sign_in', credentials);
};

export const signOut = () => {
  return axiosClient().delete('/users/sign_out');
};
