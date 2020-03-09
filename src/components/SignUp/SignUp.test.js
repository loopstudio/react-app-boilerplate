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
import SignUp from '.';

const fakeUser = {
  email: 'user@example.com',
  firstName: 'User',
  lastName: 'Example',
  password: 'password',
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

    await wait(() => {
      fillInput(email, fakeUser.email);
      fillInput(firstName, fakeUser.firstName);
      fillInput(lastName, fakeUser.lastName);
      fillInput(password, fakeUser.password);
    });

    expect(submitButton).toBeEnabled();
    expect(email.value).toBe(fakeUser.email);
    expect(firstName.value).toBe(fakeUser.firstName);
    expect(lastName.value).toBe(fakeUser.lastName);
    expect(password.value).toBe(fakeUser.password);

    await wait(() => {
      fireEvent.click(submitButton);
    });

    expect(mockedRequest.isDone()).toBeTruthy();
    expect(history.location.pathname).toMatch('/');
  });

  it('should show error on response failure', async () => {
    const mockedRequest = mockSignUpFailure(fakeUser);

    const { getByTestId, queryByText } = render(<SignUp />);
    const email = getByTestId('email-input');
    const firstName = getByTestId('firstName-input');
    const lastName = getByTestId('lastName-input');
    const password = getByTestId('password-input');
    const submitButton = getByTestId('submit-button');

    await wait(() => {
      fillInput(email, fakeUser.email);
      fillInput(firstName, fakeUser.firstName);
      fillInput(lastName, fakeUser.lastName);
      fillInput(password, fakeUser.password);
    });

    expect(submitButton).toBeEnabled();
    expect(email.value).toBe(fakeUser.email);
    expect(firstName.value).toBe(fakeUser.firstName);
    expect(lastName.value).toBe(fakeUser.lastName);
    expect(password.value).toBe(fakeUser.password);

    await wait(() => {
      fireEvent.click(submitButton);
    });

    expect(mockedRequest.isDone()).toBeTruthy();

    await wait(() => {
      expect(queryByText('There was an error.')).toBeInTheDocument();
    });
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
