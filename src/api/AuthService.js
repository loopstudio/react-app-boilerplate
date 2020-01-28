import axiosClient from './httpClient';

class AuthService {
  static signUp = (user) => {
    return axiosClient().post('/users', { user });
  };

  static signIn = (credentials) => {
    return axiosClient().post('/users/sign_in', { user: credentials });
  };

  static signOut = () => {
    return axiosClient().delete('/users/sign_out');
  };
}

export default AuthService;
