import '@testing-library/jest-dom/extend-expect';
import { screen } from '@testing-library/react';

import { render } from 'testUtils';
import Home from './Home';

test('shows a "Hello World" message', () => {
  render(<Home />);
  expect(screen.queryByText('Hello World')).toBeInTheDocument();
});
