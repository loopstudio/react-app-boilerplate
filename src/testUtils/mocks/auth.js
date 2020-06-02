import humps from 'humps';
import baseMock from './base';

const userResponse = {
  data: {
    user: {
      id: 1,
      first_name: 'User',
      last_name: 'Example',
      email: 'user@example.com',
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
    .query({ guestLocale: 'en' })
    .reply(200, userResponse.data, userResponse.headers);

export const mockSignUpFailure = (user) =>
  baseMock
    .post('/users', humps.decamelizeKeys({ user }))
    .query({ guestLocale: 'en' })
    .reply(422, {
      attributes_errors: {
        email: ['has already been taken'],
      },
    });

export const mockSignInSuccess = (credentials) =>
  baseMock
    .post('/users/sign_in', humps.decamelizeKeys({ user: credentials }))
    .query({ guestLocale: 'en' })
    .reply(200, userResponse.data, userResponse.headers);

export const mockSignInFailure = (credentials) =>
  baseMock
    .post('/users/sign_in', humps.decamelizeKeys({ user: credentials }))
    .query({ guestLocale: 'en' })
    .reply(403, {
      errors: ['The credentials are not valid'],
    });

export const mockUpdateUserSuccess = (user) =>
  baseMock
    .patch('/users', humps.decamelizeKeys({ user }))
    .query(true)
    .reply(200, userResponse.data, userResponse.headers);

export const mockUpdateUserFailure = (user) =>
  baseMock
    .patch('/users', humps.decamelizeKeys({ user }))
    .query({ guestLocale: 'en' })
    .reply(400, {
      errors: ['Some scary error'],
    });

export const mockUpdatePasswordSuccess = (password) =>
  baseMock
    .patch('/users/password', humps.decamelizeKeys({ password }))
    .query({ guestLocale: 'en' })
    .reply(200, userResponse.data, userResponse.headers);

export const mockUpdatePasswordFailure = (password) =>
  baseMock
    .patch('/users/password', humps.decamelizeKeys({ password }))
    .query({ guestLocale: 'en' })
    .reply(400, {
      attributes_errors: {
        password: ['is too short (minimum is 6 characters)'],
      },
    });
