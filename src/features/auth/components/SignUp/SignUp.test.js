import '@testing-library/jest-dom/extend-expect';
import { screen } from '@testing-library/react';

import {
  fillInput,
  fireEvent,
  render,
  renderWithRouter,
  waitFor,
} from 'testUtils';
import { mockSignUpSuccess, mockSignUpFailure } from 'testUtils/mocks/auth';
import SignUp from 'features/auth/components/SignUp/index';

const fakeUser = {
  email: 'user@example.com',
  firstName: 'User',
  lastName: 'Example',
  password: 'password',
  locale: 'en',
};

describe('SignUp', () => {
  it('submits correctly', async () => {
    const mockedRequest = mockSignUpSuccess(fakeUser);

    const { history } = renderWithRouter(<SignUp />, { history: ['/sign-up'] });

    const email = screen.getByLabelText('Email');
    const firstName = screen.getByLabelText('First Name');
    const lastName = screen.getByLabelText('Last Name');
    const password = screen.getByLabelText('Password');
    const submitButton = screen.getByRole('button');

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

  it('shows error on response failure', async () => {
    const mockedRequest = mockSignUpFailure(fakeUser);

    render(<SignUp />);
    const email = screen.getByLabelText('Email');
    const firstName = screen.getByLabelText('First Name');
    const lastName = screen.getByLabelText('Last Name');
    const password = screen.getByLabelText('Password');
    const submitButton = screen.getByRole('button');

    fillInput(email, fakeUser.email);
    fillInput(firstName, fakeUser.firstName);
    fillInput(lastName, fakeUser.lastName);
    fillInput(password, fakeUser.password);

    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(mockedRequest.isDone()).toBeTruthy();
      expect(screen.getByText('Has already been taken')).toBeInTheDocument();
    });
  });

  it('shows errors for invalid values', async () => {
    render(<SignUp />);
    const email = screen.getByLabelText('Email');
    const password = screen.getByLabelText('Password');
    const submitButton = screen.getByRole('button');

    fillInput(email, 'invalid');
    fillInput(password, 'invalid');

    fireEvent.click(submitButton);

    const emailError = await screen.findByText('Invalid email');
    const passwordError = await screen.findByText(
      'Password too short, minimum length is 8 characters'
    );

    expect(emailError).toBeInTheDocument();
    expect(passwordError).toBeInTheDocument();
  });
});
