import React from 'react';
import flatten from 'flat';
import PropTypes from 'prop-types';
import { IntlProvider } from 'react-intl';
// import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { ThemeProvider } from '@emotion/react';
import theme from 'theme';

import AppLocale from 'features/app/locales';
// import configureStore from 'store';
import httpClient from 'features/app/services/httpClient'; // applyMiddlewares,
import { GuestLocaleProvider } from '../features/app/context/guestLocale';

const renderWithProviders = (
  ui,
  { state = {}, history = createMemoryHistory(), ...options } = {}
) => {
  // const { store } = configureStore({ initialState: state, persist: false });
  // applyMiddlewares(httpClient, store);

  const Wrapper = ({ children }) => (
    // <Provider store={store}>
    <GuestLocaleProvider>
      <IntlProvider locale="en" messages={flatten(AppLocale.en.messages)}>
        <ThemeProvider theme={theme}>
          <Router history={history}>{children}</Router>
        </ThemeProvider>
      </IntlProvider>
    </GuestLocaleProvider>
    // </Provider>
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
