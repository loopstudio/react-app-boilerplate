import React from 'react';
import '@testing-library/jest-dom/extend-expect';

import { render } from 'testUtils';
import Loading from './index';

test('shows a "Loading..." message', () => {
  const { queryByText } = render(<Loading />);

  expect(queryByText('Loading...')).toBeInTheDocument();
});
