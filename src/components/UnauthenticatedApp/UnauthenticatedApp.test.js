import React from 'react';
import '@testing-library/jest-dom/extend-expect';

import { renderWithRouter } from 'testUtils';
import UnauthenticatedApp from './UnauthenticatedApp';

describe('Unauthenticated App', () => {
  it('renders the Sign in Page', () => {
    const { getByTestId } = renderWithRouter(<UnauthenticatedApp />, {
      history: ['/sign-in'],
    });

    expect(getByTestId('signin-form')).toBeInTheDocument();
  });

  it('renders the Sign up Page', () => {
    const { getByTestId } = renderWithRouter(<UnauthenticatedApp />, {
      history: ['/sign-up'],
    });

    expect(getByTestId('signup-form')).toBeInTheDocument();
  });

  it('renders the Forgot Password Page', () => {
    const { getByTestId } = renderWithRouter(<UnauthenticatedApp />, {
      history: ['/forgot-password'],
    });

    expect(getByTestId('forgot-password-email-form')).toBeInTheDocument();
  });

  it('redirects to the Sign in Page when an unknown route is used', () => {
    const { history } = renderWithRouter(<UnauthenticatedApp />, {
      history: ['/no-match'],
    });

    expect(history.location.pathname).toBe('/sign-in');
  });
});
