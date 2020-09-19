import React from 'react';

import { render } from 'testUtils';
import App from 'components/App';

describe('App', () => {
  it('should render without crashing', () => {
    render(<App />);
  });
});
