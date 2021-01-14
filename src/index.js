import { StrictMode } from 'react';
import * as React from 'react';
import ReactDOM, { render } from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ThemeProvider } from '@emotion/react';

import App from 'features/app/components/App';
import configureStore from 'store';
import httpClient, {
  applyMiddlewares,
} from 'features/auth/services/httpClient';
import * as serviceWorker from 'serviceWorker';
import theme from 'theme';

if (process.env.NODE_ENV !== 'production') {
  import('react-axe').then((axe) => axe.default(React, ReactDOM, 1000));
}

const { store, persistor } = configureStore();
applyMiddlewares(httpClient, store);

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
  document.getElementById('root')
);

serviceWorker.unregister();
