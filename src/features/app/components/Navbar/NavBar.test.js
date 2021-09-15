import { render } from 'testUtils';
import '@testing-library/jest-dom/extend-expect';
import { screen } from '@testing-library/react';

import Button from './Button';
import Logo from './Logo';
import Menu from './Menu';

describe('Menu', () => {
  describe('Button', () => {
    it('renders the proper text', () => {
      render(<Button onClick={() => {}} formattedMessageId="common.signIn" />);
      expect(screen.queryByText('Sign in')).toBeInTheDocument();
    });
  });

  describe('Logo', () => {
    it('renders the proper text', () => {
      render(<Logo />);
      expect(screen.queryByText('LoopStudio')).toBeInTheDocument();
    });
  });

  describe('when user is authenticated', () => {
    it('renders the settings and sign out buttons', () => {
      render(<Menu isAuthenticated />);
      const settingsButton = screen.queryByText('Account settings');
      const signOutButton = screen.queryByText('Sign out');
      const signUpButton = screen.queryByText('Sign up');
      const signInButton = screen.queryByText('Sign in');

      expect(settingsButton).toBeInTheDocument();
      expect(signOutButton).toBeInTheDocument();
      expect(signUpButton).toBeNull();
      expect(signInButton).toBeNull();
    });
  });

  describe('when user is not authenticated', () => {
    it('renders the sign in and sign up buttons', () => {
      render(<Menu />);
      const signUpButton = screen.queryByText('Sign up');
      const signInButton = screen.queryByText('Sign in');
      const settingsButton = screen.queryByText('Account settings');
      const signOutButton = screen.queryByText('Sign out');

      expect(signUpButton).toBeInTheDocument();
      expect(signInButton).toBeInTheDocument();
      expect(settingsButton).toBeNull();
      expect(signOutButton).toBeNull();
    });
  });
});
