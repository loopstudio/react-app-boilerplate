import React from 'react';
import '@testing-library/jest-dom/extend-expect';

import { render } from 'testUtils';
import Home from 'features/app/components/Home/index';

test('shows a "Hello World" message', () => {
  const { queryByText } = render(<Home />);
  expect(queryByText('Hello World')).toBeInTheDocument();
});
