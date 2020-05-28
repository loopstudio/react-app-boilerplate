import React, { StrictMode } from 'react';
import ReactDOM, { render } from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ThemeProvider } from 'emotion-theming';

import App from 'components/App';
import { persistor, store } from 'store';
import * as serviceWorker from 'serviceWorker';
import theme from './theme';

if (process.env.NODE_ENV !== 'production') {
  import('react-axe').then((axe) => axe.default(React, ReactDOM, 1000));
}

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
