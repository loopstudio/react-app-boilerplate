import React from 'react';

import { render } from 'testUtils';
import App from 'App';

describe('App', () => {
  it('should render without crashing', () => {
    render(<App />);
  });
});
