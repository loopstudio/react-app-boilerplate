import React, { StrictMode } from 'react'; // eslint-disable-line no-restricted-imports
import ReactDOM, { render } from 'react-dom';
import { ThemeProvider } from '@emotion/react';
import { AuthProvider } from 'loop-react-auth';

import { GuestLocaleProvider } from 'features/app/context/guestLocale';
import App from 'features/app/components/App';
import httpClient from 'features/app/services/httpClient';
import * as serviceWorker from 'serviceWorker';
import theme from 'theme';

if (process.env.NODE_ENV !== 'production') {
  import('react-axe').then((axe) => axe.default(React, ReactDOM, 1000));
}

render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <AuthProvider httpClient={httpClient}>
        <GuestLocaleProvider>
          <App />
        </GuestLocaleProvider>
      </AuthProvider>
    </ThemeProvider>
  </StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
