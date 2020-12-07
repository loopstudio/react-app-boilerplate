import React, { StrictMode } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ThemeProvider } from '@emotion/react';

import App from 'features/app/components/App';
import configureStore from 'store';
import httpClient, {
  applyMiddlewares,
} from 'features/auth/services/httpClient';
import theme from 'theme';

const { store, persistor } = configureStore();
applyMiddlewares(httpClient, store);

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
        <Provider store={store}>
          <PersistGate persistor={persistor}>
            <ThemeProvider theme={theme}>
              <App />
            </ThemeProvider>
          </PersistGate>
        </Provider>
      </StrictMode>,
      root
    );
  });
});
