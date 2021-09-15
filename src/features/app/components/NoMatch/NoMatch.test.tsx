import { renderWithRouter } from 'testUtils';
import '@testing-library/jest-dom/extend-expect';
import { screen } from '@testing-library/react';

import NoMatch from './NoMatch';

describe('NoMatch', () => {
  test('shows a "404" message', () => {
    renderWithRouter(<NoMatch />, {
      history: ['/non-existent-route'],
    });

    expect(screen.queryByText('404')).toBeInTheDocument();
    expect(
      screen.queryByText(
        "It seems like the page you are looking for doesn't exist"
      )
    ).toBeInTheDocument();
  });
});
