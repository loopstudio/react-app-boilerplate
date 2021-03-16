import '@testing-library/jest-dom/extend-expect';

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

    const { getByLabelText, getByRole, history } = renderWithRouter(
      <SignIn />,
      { history: ['/sign-in'] }
    );
    const submitButton = getByRole('button');
    const email = getByLabelText('Email');
    const password = getByLabelText('Password');

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

    const { getByLabelText, getByRole, getByText } = render(<SignIn />);
    const submitButton = getByRole('button');
    const email = getByLabelText('Email');
    const password = getByLabelText('Password');

    fillInput(email, fakeCredentials.email);
    fillInput(password, fakeCredentials.password);

    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(mockedRequest.isDone()).toBeTruthy();
      expect(getByText('The credentials are not valid')).toBeInTheDocument();
    });
  });

  it('shows errors for invalid values', async () => {
    const { getByLabelText, getByRole, findByText } = render(<SignIn />);
    const submitButton = getByRole('button');
    const email = getByLabelText('Email');

    fillInput(email, 'invalid');

    fireEvent.click(submitButton);

    const emailError = await findByText('Invalid email');
    const passwordError = await findByText('Required');

    expect(emailError).toBeInTheDocument();
    expect(passwordError).toBeInTheDocument();
  });
});
