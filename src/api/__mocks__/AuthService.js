const AuthService = jest.mock('../AuthService');

AuthService.signUp = jest.fn(() => Promise.resolve());
AuthService.signIn = jest.fn(() => Promise.resolve());
AuthService.signOut = jest.fn(() => Promise.resolve());

export default AuthService;
