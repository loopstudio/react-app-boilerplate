import React from 'react';
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

  it('renders the settings and sign out buttons when authenticated', () => {
    const { queryByText } = render(<Menu isAuthenticated />);
    const settingButton = queryByText('Account settings');
    const signOutButton = queryByText('Sign out');
    const signUpButton = queryByText('Sign up');
    const signInButton = queryByText('Sign in');

    expect(settingButton).toBeInTheDocument();
    expect(signOutButton).toBeInTheDocument();
    expect(signUpButton).toBeNull();
    expect(signInButton).toBeNull();
  });

  it('renders the sign in and sign up buttons when it is not authenticated', () => {
    const { queryByText } = render(<Menu />);
    const signUpButton = queryByText('Sign up');
    const signInButton = queryByText('Sign in');
    const settingButton = queryByText('Account settings');
    const signOutButton = queryByText('Sign out');

    expect(signUpButton).toBeInTheDocument();
    expect(signInButton).toBeInTheDocument();
    expect(settingButton).toBeNull();
    expect(signOutButton).toBeNull();
  });
});
