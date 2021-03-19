import { render } from 'testUtils';
import App from './App';

describe('App', () => {
  it('renders without crashing', () => {
    render(<App />);
  });
});
