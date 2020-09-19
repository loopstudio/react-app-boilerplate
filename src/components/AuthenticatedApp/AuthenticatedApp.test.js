import React from 'react';
import '@testing-library/jest-dom/extend-expect';

import { renderWithRouter } from 'testUtils';
import { userData, authenticationHeaders } from 'testUtils/mocks/auth';
import AuthenticatedApp from 'components/AuthenticatedApp';

const state = {
  auth: {
    user: userData,
    session: authenticationHeaders,
  },
};

describe('Authenticated App', () => {
  it('renders the Home Page', () => {
    const { getByText } = renderWithRouter(<AuthenticatedApp />, {
      state,
      history: ['/'],
    });

    expect(getByText('Hello World')).toBeInTheDocument();
  });

  it('renders the Settings Page', () => {
    const { getByText } = renderWithRouter(<AuthenticatedApp />, {
      state,
      history: ['/settings'],
    });

    expect(getByText('Account settings')).toBeInTheDocument();
  });

  it('renders the No match Page', () => {
    const { getByText } = renderWithRouter(<AuthenticatedApp />, {
      state,
      history: ['/no-match'],
    });

    expect(getByText('404')).toBeInTheDocument();
  });
});
