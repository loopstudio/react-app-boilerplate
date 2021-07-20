import { StrictMode } from 'react';
import { render } from 'react-dom';
import { ThemeProvider } from '@emotion/react';
import { AuthProvider } from '@loopstudio/react-auth';

import App from 'features/app/components/App';
import httpClient from 'features/app/services/httpClient';
import theme from 'theme';

jest.mock('react-dom', () => ({ render: jest.fn() }));

describe('index.js', () => {
  it('renders without crashing', () => {
    const root = document.createElement('div');
    root.id = 'root';
    document.body.appendChild(root);

    // eslint-disable-next-line global-require
    require('./index.js');

    render(
      <StrictMode>
        <ThemeProvider theme={theme}>
          <AuthProvider httpClient={httpClient}>
            <App />
          </AuthProvider>
        </ThemeProvider>
      </StrictMode>,
      root
    );
  });
});
