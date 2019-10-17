import axiosClient from './httpClient';

export const signUp = (user) => axiosClient().post('/auth', user);

export const signIn = (credentials) => axiosClient().post('/auth/sign_in', credentials);

export const signOut = () => axiosClient().delete('/auth/sign_out');
