import React from 'react';
import { renderWithRouter } from 'testUtils';
import '@testing-library/jest-dom/extend-expect';

import NoMatch from './index';

test('shows a "404" message', () => {
  const { queryByText } = renderWithRouter(<NoMatch />, {
    route: '/non-existent-route',
  });

  expect(queryByText('404')).toBeInTheDocument();
});
