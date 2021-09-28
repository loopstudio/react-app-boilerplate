import '@testing-library/jest-dom/extend-expect';
import { screen } from '@testing-library/react';

import { fireEvent, renderWithRouter, waitFor } from 'testUtils';
import {
  userData,
  authenticationHeaders,
  mockSignOutSuccess,
} from 'testUtils/mocks/auth';
import Navbar from './Navbar';

describe('Menu', () => {
  const fakeState = {
    auth: {
      user: userData,
      session: authenticationHeaders,
    },
  };

  it('navigates to settings', async () => {
    const { history } = renderWithRouter(<Navbar />, {
      history: ['/'],
      state: fakeState,
    });

    const menuButton = screen.getByRole('button');
    fireEvent.click(menuButton);

    const settingsButton = screen.getByText('Account settings');
    fireEvent.click(settingsButton);

    await waitFor(() => {
      expect(settingsButton).toBeInTheDocument();
      expect(history.location.pathname).toEqual('/settings');
    });
  });

  it('logs out', async () => {
    const mockedRequest = mockSignOutSuccess();

    const { history } = renderWithRouter(<Navbar />, {
      history: ['/'],
      state: fakeState,
    });

    const menuButton = screen.getByRole('button');
    fireEvent.click(menuButton);

    const signOutButton = screen.getByText('Sign out');
    fireEvent.click(signOutButton);

    await waitFor(() => {
      expect(mockedRequest.isDone()).toBeTruthy();
      expect(signOutButton).toBeInTheDocument();
      expect(history.location.pathname).toEqual('/sign-in');
    });
  });

  it('navigates to sign in', async () => {
    const { history } = renderWithRouter(<Navbar />, {
      history: ['/forgot-password'],
    });

    const menuButton = screen.getByRole('button');
    fireEvent.click(menuButton);

    const signInButton = screen.getByRole('button', { name: 'Sign in' });
    fireEvent.click(signInButton);

    await waitFor(() => {
      expect(signInButton).toBeInTheDocument();
      expect(history.location.pathname).toEqual('/sign-in');
    });
  });

  it('navigates to sign up', async () => {
    const { history } = renderWithRouter(<Navbar />, {
      history: ['/forgot-password'],
    });

    const menuButton = screen.getByRole('button');
    fireEvent.click(menuButton);

    const signUpButton = screen.getByRole('button', { name: 'Sign up' });
    fireEvent.click(signUpButton);

    await waitFor(() => {
      expect(signUpButton).toBeInTheDocument();
      expect(history.location.pathname).toEqual('/sign-up');
    });
  });
});
