class AuthService {
  static httpClient;

  static setHttpClient(client) {
    this.httpClient = client;
  }

  static signUp(user) {
    return this.httpClient.post('/users', { user });
  }

  static signIn(user) {
    return this.httpClient.post('/users/sign_in', { user });
  }

  static signOut() {
    return this.httpClient.delete('/users/sign_out');
  }

  static validateToken() {
    return this.httpClient.get('/users/validate_token');
  }

  static updateUser(user, passwordCheck) {
    return this.httpClient.patch('/user', { user, passwordCheck });
  }

  static requestPasswordReset(email) {
    return this.httpClient.post('/users/password', { email });
  }

  static verifyPasswordReset(resetPasswordToken) {
    return this.httpClient.get('users/password/edit', {
      params: { resetPasswordToken },
    });
  }

  static resetPassword(password, resetPasswordToken) {
    return this.httpClient.put('/users/password', {
      password,
      resetPasswordToken,
    });
  }
}

export default AuthService;
