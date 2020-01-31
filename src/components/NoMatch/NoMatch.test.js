import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import NoMatch from './index';

test('shows a "404 Not found" message', () => {
  const { queryByText } = render(<NoMatch />);

  expect(queryByText('404 Not found')).toBeInTheDocument();
});
