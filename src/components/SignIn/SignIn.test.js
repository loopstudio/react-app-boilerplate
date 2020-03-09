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
import SignIn from '.';

const fakeCredentials = {
  email: 'user@example.com',
  password: 'password',
};

describe('SignIn', () => {
  it('should submit correctly', async () => {
    const mockedRequest = mockSignInSuccess(fakeCredentials);

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

    expect(mockedRequest.isDone()).toBeTruthy();
    expect(history.location.pathname).toMatch('/');
  });

  it('should show error on response failure', async () => {
    const mockedRequest = mockSignInFailure(fakeCredentials);

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

    expect(mockedRequest.isDone()).toBeTruthy();

    await wait(() => {
      expect(queryByText('There was an error.')).toBeInTheDocument();
    });
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
