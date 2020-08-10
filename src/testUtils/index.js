import React from 'react';
import flatten from 'flat';
import PropTypes from 'prop-types';
import { IntlProvider } from 'react-intl';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { ThemeProvider } from 'emotion-theming';
import theme from 'theme';

import AppLocale from 'locales';
import configureStore from 'store';
import httpClient, { applyMiddlewares } from 'services/httpClient';

const renderWithProviders = (
  ui,
  { state = {}, history = ['/'], ...options } = {}
) => {
  const { store } = configureStore({ initialState: state, persist: false });
  applyMiddlewares(httpClient, store);

  const Wrapper = ({ children }) => (
    <Provider store={store}>
      <IntlProvider locale="en" messages={flatten(AppLocale.en.messages)}>
        <ThemeProvider theme={theme}>
          <MemoryRouter initialEntries={history}>{children}</MemoryRouter>
        </ThemeProvider>
      </IntlProvider>
    </Provider>
  );

  Wrapper.propTypes = {
    children: PropTypes.node.isRequired,
  };

  return render(ui, { wrapper: Wrapper, ...options });
};

function renderWithRouter(ui, options) {
  const history = createMemoryHistory({ initialEntries: options.history });
  return {
    ...renderWithProviders(ui, options),
    history,
  };
}

// re-export everything
export * from '@testing-library/react';
export * from './fieldHelpers';

// override render method
export { renderWithProviders as render, renderWithRouter };
