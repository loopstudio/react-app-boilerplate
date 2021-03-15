import React from 'react';
import flatten from 'flat';
import PropTypes from 'prop-types';
import { IntlProvider } from 'react-intl';
import { Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { ThemeProvider } from '@emotion/react';
import theme from 'theme';

import AppLocale from 'features/app/locales';
import httpClient from 'features/app/services/httpClient';
import { GuestLocaleProvider } from 'features/app/context/guestLocale';
import { AuthProvider } from 'features/auth';

const renderWithProviders = (
  ui,
  { state = {}, history = createMemoryHistory(), ...options } = {}
) => {
  const Wrapper = ({ children }) => (
    <GuestLocaleProvider>
      <IntlProvider locale="en" messages={flatten(AppLocale.en.messages)}>
        <ThemeProvider theme={theme}>
          <AuthProvider prepopulatedState={state?.auth} httpClient={httpClient}>
            <Router history={history}>{children}</Router>
          </AuthProvider>
        </ThemeProvider>
      </IntlProvider>
    </GuestLocaleProvider>
  );

  Wrapper.propTypes = {
    children: PropTypes.node.isRequired,
  };

  return render(ui, { wrapper: Wrapper, ...options });
};

function renderWithRouter(ui, { history, ...options }) {
  const historyData = createMemoryHistory({ initialEntries: history });

  return {
    ...renderWithProviders(ui, { history: historyData, ...options }),
    history: historyData,
  };
}

// re-export everything
export * from '@testing-library/react';
export * from 'testUtils/fieldHelpers';

// override render method
export { renderWithProviders as render, renderWithRouter };
