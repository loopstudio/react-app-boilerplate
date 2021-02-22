import React, { StrictMode } from 'react';
import ReactDOM, { render } from 'react-dom';

import { AuthProvider } from 'features/auth';
import { GuestLocaleProvider } from 'features/app/context/guestLocale';

import { ThemeProvider } from '@emotion/react';

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
      <GuestLocaleProvider>
        <AuthProvider httpClient={httpClient}>
          <App />
        </AuthProvider>
      </GuestLocaleProvider>
    </ThemeProvider>
  </StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
