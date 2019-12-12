import axiosClient from './httpClient';

class AuthService {
  static signUp = (user) => {
    return axiosClient().post('/auth', user);
  };
  
  static signIn = (credentials) => {
    return axiosClient().post('/auth/sign_in', credentials);
  };
  
  static signOut = () => {
    return axiosClient().delete('/auth/sign_out');
  };
}

export default AuthService;
