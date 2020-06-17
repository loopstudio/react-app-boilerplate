import httpClient from './httpClient';

class AuthService {
  static signUp(user) {
    return httpClient.post('/users', { user });
  }

  static signIn(user) {
    return httpClient.post('/users/sign_in', { user });
  }

  static signOut() {
    return httpClient.delete('/users/sign_out');
  }

  static resetPassword(email) {
    return httpClient.post('/users/password', { email });
  }

  static updatePassword(password) {
    return httpClient.patch('/users/password', { password });
  }

  static updateUser(user) {
    return httpClient.patch('/users', { user });
  }
}

export default AuthService;
