import humps from 'humps';
import baseMock from './base';

const userResponse = {
  body: {
    data: {
      user: {
        id: 1,
        first_name: 'User',
        last_name: 'Example',
        email: 'user@example.com',
      },
    },
  },
  headers: {
    uid: 'user@example.com',
    client: 'client',
    'access-token': 'token',
  },
};

export const mockSignUpSuccess = (user) =>
  baseMock
    .post('/users', humps.decamelizeKeys({ user }))
    .reply(200, userResponse.body, userResponse.headers);

export const mockSignUpFailure = (user) =>
  baseMock.post('/users', humps.decamelizeKeys({ user })).reply(422, {
    data: {
      attributes_errors: {
        email: 'has already been taken',
      },
    },
  });

export const mockSignInSuccess = (credentials) =>
  baseMock
    .post('/users/sign_in', humps.decamelizeKeys({ user: credentials }))
    .reply(200, userResponse.body, userResponse.headers);

export const mockSignInFailure = (credentials) =>
  baseMock
    .post('/users/sign_in', humps.decamelizeKeys({ user: credentials }))
    .reply(403, {
      data: {
        errors: ['The credentials are not valid'],
      },
    });
