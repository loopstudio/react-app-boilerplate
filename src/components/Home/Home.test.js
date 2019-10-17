import '@testing-library/jest-dom/extend-expect'
import React from 'react';
import { render } from '@testing-library/react';
import Home from './index';

test('shows a "Hello World" message', () => {
  const { getByText } = render(<Home />);

  expect(getByText('Hello World')).toBeInTheDocument();
});
