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

  static getVerificationCode(email) {
    return httpClient.post('/users/password', { email });
  }

  static updateUser(user) {
    return httpClient.patch('/users', { user });
  }

  static verifyToken(token) {
    return httpClient.get(`users/password/edit?reset_password_token=${token}`);
  }

  static resetPassword(password, resetPasswordToken) {
    return httpClient.put('/users/password', { password, resetPasswordToken });
  }
}

export default AuthService;
