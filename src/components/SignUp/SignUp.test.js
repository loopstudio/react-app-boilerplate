import React from 'react';
import '@testing-library/jest-dom/extend-expect';

import {
  fillInput,
  fireEvent,
  render,
  renderWithRouter,
  wait,
} from 'testUtils';
import { mockSignUpSuccess, mockSignUpFailure } from 'testUtils/mocks/auth';
import fakeAuthService from 'api/AuthService';
import SignUp from '.';

jest.mock('api/AuthService');

const fakeCredentials = {
  email: 'user@example.com',
  firstName: 'User',
  lastName: 'Example',
  password: 'password',
};

describe('SignUp', () => {
  it('should submit correctly', async () => {
    mockSignUpSuccess();

    const { getByTestId, history } = renderWithRouter(<SignUp />, {
      route: '/sign-up',
    });
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
    expect(history.location.pathname).toMatch('/');
  });

  it('should show error on response failure', async () => {
    mockSignUpFailure();

    const { getByTestId, queryByText } = render(<SignUp />);
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
    expect(queryByText('There was an error.')).toBeInTheDocument();
  });

  it('should disable the submit button for invalid values', async () => {
    const { getByTestId } = render(<SignUp />);
    const email = getByTestId('email-input');
    const submitButton = getByTestId('submit-button');

    await wait(() => {
      fillInput(email, 'invalid');
    });

    expect(submitButton).toBeDisabled();
  });
});
