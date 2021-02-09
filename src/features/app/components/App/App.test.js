import React from 'react';

import { render } from 'testUtils';
import App from 'features/app/components/App';
import { AuthProvider } from 'features/auth';

describe('App', () => {
  it('should render without crashing', () => {
    render(<AuthProvider><App /></AuthProvider>);
  });
});
