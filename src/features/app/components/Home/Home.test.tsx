import '@testing-library/jest-dom/extend-expect';

import { render } from 'testUtils';
import Home from './Home';

test('shows a "Hello World" message', () => {
  const { queryByText } = render(<Home />);
  expect(queryByText('Hello World')).toBeInTheDocument();
});
