import httpClient from './httpClient';

class AuthService {
  static signUp = (user) => httpClient.post('/users', { user });

  static signIn = (credentials) =>
    httpClient.post('/users/sign_in', { user: credentials });

  static signOut = () => httpClient.delete('/users/sign_out');

  static resetPassword = (email) =>
    httpClient.post('/users/password', { email });

  static updatePassword = (password) =>
    httpClient.patch('/users/password', { password });

  static updateUser = (user) => httpClient.patch('/users', { user });
}

export default AuthService;
