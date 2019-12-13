import React from 'react';
import '@testing-library/jest-dom/extend-expect';

import { cleanup, fillInput, fireEvent, render, wait } from 'testUtils';
import fakeAuthService from 'api/AuthService';
import SignIn from '.';

jest.mock('api/AuthService', () => ({
  signIn: jest.fn(() => Promise.resolve()),
}));

const fakeCredentials = {
  email: 'user@example.com',
  password: 'password',
};

afterEach(cleanup);

describe('SignIn', () => {
  it('should submit correctly', async () => {
    const { getByTestId } = render(<SignIn />);
    const submitButton = getByTestId('submit-button');
    const email = getByTestId('email-input');
    const password = getByTestId('password-input');

    await wait(() => {
      fillInput(email, fakeCredentials.email);
      fillInput(password, fakeCredentials.password);
    });

    expect(submitButton).toBeEnabled();
    expect(email.value).toBe(fakeCredentials.email);
    expect(password.value).toBe(fakeCredentials.password);

    await wait(() => {
      fireEvent.click(submitButton);
    });

    expect(fakeAuthService.signIn).toHaveBeenCalledTimes(1);
    expect(fakeAuthService.signIn).toHaveBeenCalledWith(fakeCredentials);
  });

  it('should disabled the submit button', async () => {
    const { getByTestId } = render(<SignIn />);
    const submitButton = getByTestId('submit-button');
    const email = getByTestId('email-input');

    await wait(() => {
      fillInput(email, 'invalid');
    });

    expect(submitButton).toBeDisabled();
  });
});
