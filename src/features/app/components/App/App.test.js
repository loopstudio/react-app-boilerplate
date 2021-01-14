import { render } from 'testUtils';
import App from 'features/app/components/App';

describe('App', () => {
  it('should render without crashing', () => {
    render(<App />);
  });
});
