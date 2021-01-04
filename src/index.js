import React, { StrictMode } from 'react';
import ReactDOM, { render } from 'react-dom';
import { AuthProvider } from 'features/auth';

import { ThemeProvider } from '@emotion/react';

import App from 'features/app/components/App';
// import httpClient, {
//   applyMiddlewares,
// } from 'features/auth/services/httpClient';
import * as serviceWorker from 'serviceWorker';
import theme from 'theme';

if (process.env.NODE_ENV !== 'production') {
  import('react-axe').then((axe) => axe.default(React, ReactDOM, 1000));
}

render(
  <StrictMode>
    <AuthProvider>
      {/* <Provider store={store}> */}
      {/* <PersistGate persistor={persistor}> */}
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
      {/* </PersistGate> */}
      {/* </Provider> */}
    </AuthProvider>
  </StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
