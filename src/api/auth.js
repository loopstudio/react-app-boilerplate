import axiosClient from './httpClient';

export const signUp = (user) => {
  return axiosClient().post('/auth', user);
};

export const signIn = (credentials) => {
  return axiosClient().post('/auth/sign_in', credentials);
};

export const signOut = () => {
  return axiosClient().delete('/auth/sign_out');
};
