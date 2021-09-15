import { fireEvent, render } from 'testUtils';
import { screen } from '@testing-library/react';

import { userData, authenticationHeaders } from 'testUtils/mocks/auth';
import UserOptions from './UserOptions';

const state = {
  auth: {
    user: userData,
    session: authenticationHeaders,
  },
};

describe('UserOptions', () => {
  it('renders an avatar when the user is logged in', () => {
    render(<UserOptions />, { state });

    screen.getByRole('img', { name: 'avatar' });
  });

  it('does not render an avatar when the user is not logged in', () => {
    render(<UserOptions />);

    expect(screen.queryByRole('img', { name: 'avatar' })).toBeNull();
  });

  it('opens the menu if the user clicks on the avatar', () => {
    render(<UserOptions />, { state });

    const avatar = screen.getByRole('button', { name: 'avatar' });

    fireEvent.click(avatar);

    screen.getByRole('button', { name: 'Sign out' });
  });

  it('opens the menu when the user is not logged in and clicks on the menu button', () => {
    render(<UserOptions />);

    const menuButton = screen.getByRole('button');

    fireEvent.click(menuButton);

    screen.getByRole('button', { name: 'Sign in' });
  });
});
