import httpClient from 'services/httpClient';

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

  static updateUser(user, passwordCheck) {
    return httpClient.patch('/user', { user, passwordCheck });
  }

  static verifyToken(resetPasswordToken) {
    return httpClient.get('users/password/edit', {
      params: { resetPasswordToken },
    });
  }

  static resetPassword(password, resetPasswordToken) {
    return httpClient.put('/users/password', { password, resetPasswordToken });
  }
}

export default AuthService;
