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
import { SignUp } from 'components';

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

    const { getByLabelText, getByRole, history } = renderWithRouter(
      <SignUp />,
      { history: ['/sign-up'] }
    );

    const email = getByLabelText('Email');
    const firstName = getByLabelText('First Name');
    const lastName = getByLabelText('Last Name');
    const password = getByLabelText('Password');
    const submitButton = getByRole('button');

    fillInput(email, fakeUser.email);
    fillInput(firstName, fakeUser.firstName);
    fillInput(lastName, fakeUser.lastName);
    fillInput(password, fakeUser.password);

    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(mockedRequest.isDone()).toBeTruthy();
      expect(history.location.pathname).toBe('/');
    });
  });

  it('should show error on response failure', async () => {
    const mockedRequest = mockSignUpFailure(fakeUser);

    const { getByLabelText, getByRole, getByText } = render(<SignUp />);
    const email = getByLabelText('Email');
    const firstName = getByLabelText('First Name');
    const lastName = getByLabelText('Last Name');
    const password = getByLabelText('Password');
    const submitButton = getByRole('button');

    fillInput(email, fakeUser.email);
    fillInput(firstName, fakeUser.firstName);
    fillInput(lastName, fakeUser.lastName);
    fillInput(password, fakeUser.password);

    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(mockedRequest.isDone()).toBeTruthy();
      expect(getByText('Has already been taken')).toBeInTheDocument();
    });
  });

  it('should show errors for invalid values', async () => {
    const { getByLabelText, getByRole, findByText } = render(<SignUp />);
    const email = getByLabelText('Email');
    const password = getByLabelText('Password');
    const submitButton = getByRole('button');

    fillInput(email, 'invalid');
    fillInput(password, 'invalid');

    fireEvent.click(submitButton);

    const emailError = await findByText('Invalid email');
    const passwordError = await findByText(
      'Password too short, minimum length is 8 characters'
    );

    expect(emailError).toBeInTheDocument();
    expect(passwordError).toBeInTheDocument();
  });
});
