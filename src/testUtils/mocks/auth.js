import fakeAuthService from 'api/AuthService';

const userResponse = {
  data: {
    user: {
      id: 1,
      first_name: 'Thomas',
      last_name: 'Shelby',
      email: 'tommy@shelbyltd.com',
    },
  },
  headers: {
    uid: 'tommy@shelbyltd.com',
    client: 'client',
    'access-token': 'token',
  },
};

export const mockSignUpSuccess = () => {
  fakeAuthService.signUp.mockImplementation(() =>
    Promise.resolve(userResponse)
  );
};

export const mockSignUpFailure = () => {
  fakeAuthService.signUp.mockImplementation(() =>
    Promise.reject({
      data: {
        attributes_errors: {
          email: 'has already been taken',
        },
      },
    })
  );
};

export const mockSignInSuccess = () => {
  fakeAuthService.signIn.mockImplementation(() =>
    Promise.resolve(userResponse)
  );
};

export const mockSignInFailure = () => {
  fakeAuthService.signIn.mockImplementation(() =>
    Promise.reject({
      data: {
        errors: ['The credentials are not valid'],
      },
    })
  );
};
