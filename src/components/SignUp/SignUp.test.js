import React from 'react';
import '@testing-library/jest-dom/extend-expect';

import { cleanup, fillInput, fireEvent, render, wait } from 'testUtils';
import fakeAuthService from 'api/AuthService';
import SignUp from '.';

jest.mock('api/AuthService', () => ({
  signUp: jest.fn(() => Promise.resolve()),
}));

const fakeCredentials = {
  email: 'user@example.com',
  firstName: 'User',
  lastName: 'Example',
  password: 'password',
};

afterEach(cleanup);

describe('SignUp', () => {
  it('should submit correctly', async () => {
    const { getByTestId } = render(<SignUp />);
    const email = getByTestId('email-input');
    const firstName = getByTestId('firstName-input');
    const lastName = getByTestId('lastName-input');
    const password = getByTestId('password-input');
    const submitButton = getByTestId('submit-button');

    await wait(() => {
      fillInput(email, fakeCredentials.email);
      fillInput(firstName, fakeCredentials.firstName);
      fillInput(lastName, fakeCredentials.lastName);
      fillInput(password, fakeCredentials.password);
    });

    expect(submitButton).toBeEnabled();
    expect(email.value).toBe(fakeCredentials.email);
    expect(firstName.value).toBe(fakeCredentials.firstName);
    expect(lastName.value).toBe(fakeCredentials.lastName);
    expect(password.value).toBe(fakeCredentials.password);

    await wait(() => {
      fireEvent.click(submitButton);
    });

    expect(fakeAuthService.signUp).toHaveBeenCalledTimes(1);
    expect(fakeAuthService.signUp).toHaveBeenCalledWith(fakeCredentials);
  });

  it('should keep submit button disabled', async () => {
    const { getByTestId } = render(<SignUp />);
    const email = getByTestId('email-input');
    const submitButton = getByTestId('submit-button');

    await wait(() => {
      fillInput(email, 'invalid');
    });

    expect(submitButton).toBeDisabled();
  });
});
