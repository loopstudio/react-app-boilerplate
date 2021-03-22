import { decamelizeKeys } from 'helpers/decamelize';
import baseMock from 'testUtils/mocks/base';

export const userData = {
  id: 1,
  first_name: 'User',
  last_name: 'Example',
  email: 'user@example.com',
};

export const authenticationHeaders = {
  'Access-Token': 'token',
  Uid: 'user@example.com',
  Client: 'client',
};

const userResponse = {
  data: {
    user: userData,
  },
  headers: authenticationHeaders,
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

export const mockUpdateUserSuccess = (user, passwordCheck) => {
  const body = passwordCheck
    ? { user, passwordCheck }
    : { user, passwordCheck: null };

  return baseMock
    .patch('/user', decamelizeKeys(body))
    .reply(200, userResponse.data);
};

export const mockUpdateUserFailure = (user, passwordCheck) => {
  const body = passwordCheck
    ? { user, passwordCheck }
    : { user, passwordCheck: null };

  return baseMock.patch('/user', decamelizeKeys(body)).reply(400, {
    errors: ['Some scary error'],
  });
};

export const mockGetVerificationCodeSuccess = (email) =>
  baseMock
    .post('/users/password', decamelizeKeys({ email }))
    .query({ locale: 'en' })
    .reply(200, userResponse.data, userResponse.headers);

export const mockGetVerificationCodeFailure = (email) =>
  baseMock
    .post('/users/password', decamelizeKeys({ email }))
    .query({ locale: 'en' })
    .reply(422, {
      attributes_errors: {
        email: [`Unable to find user with email ${email}`],
      },
    });

export const mockVerifyTokenSuccess = (resetPasswordToken) =>
  baseMock
    .get('/users/password/edit')
    .query(decamelizeKeys({ locale: 'en', resetPasswordToken }))
    .reply(200, userResponse.data, userResponse.headers);

export const mockVerifyTokenFailure = (resetPasswordToken) =>
  baseMock
    .get('/users/password/edit')
    .query(decamelizeKeys({ locale: 'en', resetPasswordToken }))
    .reply(400, {
      errors: ['the reset password token is invalid'],
    });

export const mockResetPasswordSuccess = (password, resetPasswordToken) =>
  baseMock
    .put('/users/password', decamelizeKeys({ password, resetPasswordToken }))
    .query(decamelizeKeys({ locale: 'en' }))
    .reply(200, userResponse.data, userResponse.headers);

export const mockResetPasswordFailure = (password, resetPasswordToken) =>
  baseMock
    .put('/users/password', decamelizeKeys({ password, resetPasswordToken }))
    .query({ locale: 'en' })
    .reply(500, {
      errors: ['Connection error'],
    });

export const mockSignOutSuccess = () =>
  baseMock.delete('/users/sign_out').reply(200);
