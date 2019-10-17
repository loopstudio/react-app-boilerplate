import '@testing-library/jest-dom/extend-expect'
import React from 'react';
import { render } from '@testing-library/react';
import NoMatch from './index';

test('shows a "404 Not found" message', () => {
  const { getByText } = render(<NoMatch />);

  expect(getByText('404 Not found')).toBeInTheDocument();
});
