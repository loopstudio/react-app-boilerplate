import { decamelizeKeys } from 'helpers/decamelize';
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
    'Access-Token': 'token',
    Uid: 'user@example.com',
    Client: 'client',
  },
};

export const mockSignUpSuccess = (user) =>
  baseMock
    .post('/users', decamelizeKeys({ user }))
    .query({ locale: 'en' })
    .reply(200, userResponse.data, userResponse.headers);

export const mockSignUpFailure = (user) =>
  baseMock
    .post('/users', decamelizeKeys({ user }))
    .query({ locale: 'en' })
    .reply(422, {
      attributes_errors: {
        email: ['has already been taken'],
      },
    });

export const mockSignInSuccess = (credentials) =>
  baseMock
    .post('/users/sign_in', decamelizeKeys({ user: credentials }))
    .query({ locale: 'en' })
    .reply(200, userResponse.data, userResponse.headers);

export const mockSignInFailure = (credentials) =>
  baseMock
    .post('/users/sign_in', decamelizeKeys({ user: credentials }))
    .query({ locale: 'en' })
    .reply(403, {
      errors: ['The credentials are not valid'],
    });

export const mockUpdateUserSuccess = (user) =>
  baseMock
    .patch('/users', decamelizeKeys({ user }))
    .query(true)
    .reply(200, userResponse.data, userResponse.headers);

export const mockUpdateUserFailure = (user) =>
  baseMock
    .patch('/users', decamelizeKeys({ user }))
    .query({ locale: 'en' })
    .reply(400, {
      errors: ['Some scary error'],
    });

export const mockUpdatePasswordSuccess = (password) =>
  baseMock
    .patch('/users/password', decamelizeKeys({ password }))
    .query({ locale: 'en' })
    .reply(200, userResponse.data, userResponse.headers);

export const mockUpdatePasswordFailure = (password) =>
  baseMock
    .patch('/users/password', decamelizeKeys({ password }))
    .query({ locale: 'en' })
    .reply(400, {
      attributes_errors: {
        password: ['is too short (minimum is 6 characters)'],
      },
    });
