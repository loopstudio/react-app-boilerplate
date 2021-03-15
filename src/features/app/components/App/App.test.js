import React from 'react';

import { render } from 'testUtils';
import App from 'features/app/components/App';

describe('App', () => {
  it('renders without crashing', () => {
    render(<App />);
  });
});
