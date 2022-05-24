import '@testing-library/jest-dom/extend-expect';
import { screen } from '@testing-library/react';

import { renderWithRouter } from 'testUtils';
import UnauthenticatedApp from './UnauthenticatedApp';

describe('Unauthenticated App', () => {
  it('renders the Sign in Page', () => {
    renderWithRouter(<UnauthenticatedApp />, {
      history: ['/sign-in'],
    });

    expect(screen.getByTestId('signin-form')).toBeInTheDocument();
  });

  it('renders the Sign up Page', () => {
    renderWithRouter(<UnauthenticatedApp />, {
      history: ['/sign-up'],
    });

    expect(screen.getByTestId('signup-form')).toBeInTheDocument();
  });

  it('renders the Forgot Password Page', () => {
    renderWithRouter(<UnauthenticatedApp />, {
      history: ['/forgot-password'],
    });

    expect(
      screen.getByTestId('forgot-password-email-form')
    ).toBeInTheDocument();
  });

  it('redirects to the Sign in Page when an unknown route is used', () => {
    const { history } = renderWithRouter(<UnauthenticatedApp />, {
      history: ['/no-match'],
    });

    expect(history.location.pathname).toBe('/sign-in');
  });
});
