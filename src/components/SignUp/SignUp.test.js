import React from 'react';
import '@testing-library/jest-dom/extend-expect';

import {
  fillInput,
  fireEvent,
  render,
  renderWithRouter,
  waitFor,
} from 'testUtils';
import { mockSignUpSuccess, mockSignUpFailure } from 'testUtils/mocks/auth';
import SignUp from '.';

const fakeUser = {
  email: 'user@example.com',
  firstName: 'User',
  lastName: 'Example',
  password: 'password',
  locale: 'en',
};

describe('SignUp', () => {
  it('should submit correctly', async () => {
    const mockedRequest = mockSignUpSuccess(fakeUser);

    const { getByTestId, history } = renderWithRouter(<SignUp />, {
      route: '/sign-up',
    });

    const email = getByTestId('email-input');
    const firstName = getByTestId('firstName-input');
    const lastName = getByTestId('lastName-input');
    const password = getByTestId('password-input');
    const submitButton = getByTestId('submit-button');

    fillInput(email, fakeUser.email);
    fillInput(firstName, fakeUser.firstName);
    fillInput(lastName, fakeUser.lastName);
    fillInput(password, fakeUser.password);

    await waitFor(() => {
      expect(submitButton).toBeEnabled();
    });

    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(mockedRequest.isDone()).toBeTruthy();
      expect(history.location.pathname).toMatch('/');
    });
  });

  it('should show error on response failure', async () => {
    const mockedRequest = mockSignUpFailure(fakeUser);

    const { getByTestId, queryByText } = render(<SignUp />);
    const email = getByTestId('email-input');
    const firstName = getByTestId('firstName-input');
    const lastName = getByTestId('lastName-input');
    const password = getByTestId('password-input');
    const submitButton = getByTestId('submit-button');

    fillInput(email, fakeUser.email);
    fillInput(firstName, fakeUser.firstName);
    fillInput(lastName, fakeUser.lastName);
    fillInput(password, fakeUser.password);

    await waitFor(() => {
      expect(submitButton).toBeEnabled();
    });

    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(mockedRequest.isDone()).toBeTruthy();
      expect(queryByText('There was an error')).toBeInTheDocument();
    });
  });

  it('should disable the submit button for invalid values', async () => {
    const { getByTestId, queryByText } = render(<SignUp />);
    const email = getByTestId('email-input');
    const password = getByTestId('password-input');
    const submitButton = getByTestId('submit-button');

    fillInput(email, 'invalid');
    fillInput(password, 'invalid');

    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(queryByText('Invalid email')).toBeInTheDocument();
      expect(
        queryByText('Password too short, minimum length is 8 characters')
      ).toBeInTheDocument();
    });
  });
});
