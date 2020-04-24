import axiosClient from './httpClient';

class AuthService {
  static signUp = (user) => axiosClient().post('/users', { user });

  static signIn = (credentials) =>
    axiosClient().post('/users/sign_in', { user: credentials });

  static signOut = () => axiosClient().delete('/users/sign_out');

  static resetPassword = (email) =>
    axiosClient().post('/users/password', { email });

  static updatePassword = (password) =>
    axiosClient().patch('/users/password', { password });

  static updateUser = (user) => axiosClient().patch('/users', { user });
}

export default AuthService;
