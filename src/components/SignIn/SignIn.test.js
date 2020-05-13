import React from 'react';
import '@testing-library/jest-dom/extend-expect';

import {
  fillInput,
  fireEvent,
  render,
  renderWithRouter,
  waitFor,
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

    fillInput(email, fakeCredentials.email);
    fillInput(password, fakeCredentials.password);

    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(mockedRequest.isDone()).toBeTruthy();
      expect(history.location.pathname).toMatch('/');
    });
  });

  it('should show error on response failure', async () => {
    const mockedRequest = mockSignInFailure(fakeCredentials);

    const { getByTestId, queryByText } = render(<SignIn />);
    const submitButton = getByTestId('submit-button');
    const email = getByTestId('email-input');
    const password = getByTestId('password-input');

    fillInput(email, fakeCredentials.email);
    fillInput(password, fakeCredentials.password);

    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(mockedRequest.isDone()).toBeTruthy();
      expect(queryByText('There was an error')).toBeInTheDocument();
    });
  });

  it('should show errors for invalid values', async () => {
    const { getByTestId, queryByText } = render(<SignIn />);
    const submitButton = getByTestId('submit-button');
    const email = getByTestId('email-input');

    fillInput(email, 'invalid');

    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(queryByText('Invalid email')).toBeInTheDocument();
      expect(queryByText('Required')).toBeInTheDocument();
    });
  });
});
