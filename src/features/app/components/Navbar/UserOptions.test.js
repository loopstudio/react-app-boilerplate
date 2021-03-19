import { fireEvent, render } from 'testUtils';

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
    const { getByRole } = render(<UserOptions />, { state });

    getByRole('img', { name: 'avatar' });
  });

  it('does not render an avatar when the user is not logged in', () => {
    const { queryByRole } = render(<UserOptions />);

    expect(queryByRole('img', { name: 'avatar' })).toBeNull();
  });

  it('opens the menu if the user clicks on the avatar', () => {
    const { getByRole } = render(<UserOptions />, { state });

    const avatar = getByRole('button', { name: 'avatar' });

    fireEvent.click(avatar);

    getByRole('button', { name: 'Sign out' });
  });

  it('opens the menu when the user is not logged in and clicks on the menu button', () => {
    const { getByRole } = render(<UserOptions />);

    const menuButton = getByRole('button');

    fireEvent.click(menuButton);

    getByRole('button', { name: 'Sign in' });
  });
});
