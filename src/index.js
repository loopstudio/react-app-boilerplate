import React, { StrictMode } from 'react';
import ReactDOM, { render } from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import App from 'App';
import { persistor, store } from 'store';
import * as serviceWorker from 'serviceWorker';

if (process.env.NODE_ENV !== 'production') {
  import('react-axe').then((axe) => axe.default(React, ReactDOM, 1000));
}

render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
