import { render } from 'testUtils';
import '@testing-library/jest-dom/extend-expect';

import Button from './Button';
import Logo from './Logo';
import Menu from './Menu';

describe('Menu', () => {
  describe('Button', () => {
    it('renders the proper text', () => {
      const { queryByText } = render(
        <Button onClick={() => {}} formattedMessageId="common.signIn" />
      );
      expect(queryByText('Sign in')).toBeInTheDocument();
    });
  });

  describe('Logo', () => {
    it('renders the proper text', () => {
      const { queryByText } = render(<Logo />);
      expect(queryByText('LoopStudio')).toBeInTheDocument();
    });
  });

  describe('when user is authenticated', () => {
    it('renders the settings and sign out buttons', () => {
      const { queryByText } = render(<Menu isAuthenticated />);
      const settingsButton = queryByText('Account settings');
      const signOutButton = queryByText('Sign out');
      const signUpButton = queryByText('Sign up');
      const signInButton = queryByText('Sign in');

      expect(settingsButton).toBeInTheDocument();
      expect(signOutButton).toBeInTheDocument();
      expect(signUpButton).toBeNull();
      expect(signInButton).toBeNull();
    });
  });

  describe('when user is not authenticated', () => {
    it('renders the sign in and sign up buttons', () => {
      const { queryByText } = render(<Menu />);
      const signUpButton = queryByText('Sign up');
      const signInButton = queryByText('Sign in');
      const settingsButton = queryByText('Account settings');
      const signOutButton = queryByText('Sign out');

      expect(signUpButton).toBeInTheDocument();
      expect(signInButton).toBeInTheDocument();
      expect(settingsButton).toBeNull();
      expect(signOutButton).toBeNull();
    });
  });
});
