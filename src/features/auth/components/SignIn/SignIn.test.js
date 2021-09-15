import '@testing-library/jest-dom/extend-expect';
import { screen } from '@testing-library/react';

import {
  fillInput,
  fireEvent,
  render,
  renderWithRouter,
  waitFor,
} from 'testUtils';
import { mockSignInSuccess, mockSignInFailure } from 'testUtils/mocks/auth';
import SignIn from 'features/auth/components/SignIn/index';

const fakeCredentials = {
  email: 'user@example.com',
  password: 'password',
};

describe('SignIn', () => {
  it('submits correctly', async () => {
    const mockedRequest = mockSignInSuccess(fakeCredentials);

    const { history } = renderWithRouter(<SignIn />, { history: ['/sign-in'] });
    const submitButton = screen.getByRole('button');
    const email = screen.getByLabelText('Email');
    const password = screen.getByLabelText('Password');

    fillInput(email, fakeCredentials.email);
    fillInput(password, fakeCredentials.password);

    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(mockedRequest.isDone()).toBeTruthy();
      expect(history.location.pathname).toBe('/');
    });
  });

  it('shows error on response failure', async () => {
    const mockedRequest = mockSignInFailure(fakeCredentials);

    render(<SignIn />);
    const submitButton = screen.getByRole('button');
    const email = screen.getByLabelText('Email');
    const password = screen.getByLabelText('Password');

    fillInput(email, fakeCredentials.email);
    fillInput(password, fakeCredentials.password);

    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(mockedRequest.isDone()).toBeTruthy();
      expect(
        screen.getByText('The credentials are not valid')
      ).toBeInTheDocument();
    });
  });

  it('shows errors for invalid values', async () => {
    render(<SignIn />);
    const submitButton = screen.getByRole('button');
    const email = screen.getByLabelText('Email');

    fillInput(email, 'invalid');

    fireEvent.click(submitButton);

    const emailError = await screen.findByText('Invalid email');
    const passwordError = await screen.findByText('Required');

    expect(emailError).toBeInTheDocument();
    expect(passwordError).toBeInTheDocument();
  });
});
