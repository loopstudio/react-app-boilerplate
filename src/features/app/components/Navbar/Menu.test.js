import '@testing-library/jest-dom/extend-expect';

import { fireEvent, renderWithRouter, waitFor } from 'testUtils';
import { mockSignOutSuccess } from 'testUtils/mocks/auth';
import Navbar from './Navbar';

describe('Menu', () => {
  const fakeState = {
    auth: {
      user: {
        id: 1,
        firstName: 'Jane',
        lastName: 'Doe',
        email: 'jane.doe@example.com',
        locale: 'en',
        createdAt: '2020-04-21T21:20:35.663-04:00',
        updatedAt: '2020-04-21T22:22:56.291-04:00',
      },
      session: {
        uid: 'jane.doe@example.com',
        client: 'client',
        accessToken: 'token',
      },
      guestLocale: 'en',
    },
  };

  it('navigates to settings', async () => {
    const { history, getByText, getByRole } = renderWithRouter(<Navbar />, {
      history: ['/'],
      state: fakeState,
    });

    const menuButton = getByRole('button');
    fireEvent.click(menuButton);

    const settingsButton = getByText('Account settings');
    fireEvent.click(settingsButton);

    await waitFor(() => {
      expect(settingsButton).toBeInTheDocument();
      expect(history.location.pathname).toEqual('/settings');
    });
  });

  it('logs out', async () => {
    const mockedRequest = mockSignOutSuccess();

    const { history, getByText, getByRole } = renderWithRouter(<Navbar />, {
      history: ['/'],
      state: fakeState,
    });

    const menuButton = getByRole('button');
    fireEvent.click(menuButton);

    const signOutButton = getByText('Sign out');
    fireEvent.click(signOutButton);

    await waitFor(() => {
      expect(mockedRequest.isDone()).toBeTruthy();
      expect(signOutButton).toBeInTheDocument();
      expect(history.location.pathname).toEqual('/sign-in');
    });
  });
});
