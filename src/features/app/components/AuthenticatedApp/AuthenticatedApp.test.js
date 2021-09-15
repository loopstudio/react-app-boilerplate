import '@testing-library/jest-dom/extend-expect';
import { screen } from '@testing-library/react';

import { renderWithRouter } from 'testUtils';
import { userData, authenticationHeaders } from 'testUtils/mocks/auth';
import AuthenticatedApp from './AuthenticatedApp';

const state = {
  auth: {
    user: userData,
    session: authenticationHeaders,
  },
};

describe('Authenticated App', () => {
  it('renders the Home Page', () => {
    renderWithRouter(<AuthenticatedApp />, {
      state,
      history: ['/'],
    });

    expect(screen.getByText('Hello World')).toBeInTheDocument();
  });

  it('renders the Settings Page', () => {
    renderWithRouter(<AuthenticatedApp />, {
      state,
      history: ['/settings'],
    });

    expect(screen.getByText('Account settings')).toBeInTheDocument();
  });

  it('renders the No match Page', () => {
    renderWithRouter(<AuthenticatedApp />, {
      state,
      history: ['/no-match'],
    });

    expect(screen.getByText('404')).toBeInTheDocument();
  });
});
