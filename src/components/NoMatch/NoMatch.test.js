import React from 'react';
import { renderWithRouter } from 'testUtils';
import '@testing-library/jest-dom/extend-expect';

import { NoMatch } from 'components';

describe('NoMatch', () => {
  test('shows a "404" message', () => {
    const { queryByText } = renderWithRouter(<NoMatch />, {
      history: ['/non-existent-route'],
    });

    expect(queryByText('404')).toBeInTheDocument();
    expect(
      queryByText('It seems like the page you are looking for doesn’t exist')
    ).toBeInTheDocument();
  });
});
