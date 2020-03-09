import React from 'react';
import '@testing-library/jest-dom/extend-expect';

import {
  fillInput,
  fireEvent,
  render,
  renderWithRouter,
  wait,
} from 'testUtils';
import { mockSignInSuccess, mockSignInFailure } from 'testUtils/mocks/auth';
import fakeAuthService from 'api/AuthService';
import SignIn from '.';

jest.mock('api/AuthService');

const fakeCredentials = {
  email: 'user@example.com',
  password: 'password',
};

describe('SignIn', () => {
  it('should submit correctly', async () => {
    mockSignInSuccess();

    const { getByTestId, history } = renderWithRouter(<SignIn />, {
      route: '/sign-in',
    });
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
    expect(history.location.pathname).toMatch('/');
  });

  it('should show error on response failure', async () => {
    mockSignInFailure();

    const { getByTestId, queryByText } = render(<SignIn />);
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
    expect(queryByText('There was an error.')).toBeInTheDocument();
  });

  it('should disable the submit button for invalid values', async () => {
    const { getByTestId } = render(<SignIn />);
    const submitButton = getByTestId('submit-button');
    const email = getByTestId('email-input');

    await wait(() => {
      fillInput(email, 'invalid');
    });

    expect(submitButton).toBeDisabled();
  });
});
