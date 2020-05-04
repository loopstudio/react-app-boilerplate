import React from 'react';
import flatten from 'flat';
import PropTypes from 'prop-types';
import { IntlProvider } from 'react-intl';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import { createMemoryHistory } from 'history';

import AppLocale from 'locales';
import createStore from 'testUtils/store';

const renderWithProviders = (ui, { state = null, ...options } = {}) => {
  const Wrapper = ({ children }) => (
    <Provider store={createStore(state)}>
      <IntlProvider locale="en" messages={flatten(AppLocale.en.messages)}>
        <BrowserRouter>{children}</BrowserRouter>
      </IntlProvider>
    </Provider>
  );

  Wrapper.propTypes = {
    children: PropTypes.node.isRequired,
  };

  return render(ui, { wrapper: Wrapper, ...options });
};

function renderWithRouter(ui, options) {
  const history = createMemoryHistory({ initialEntries: [options.route] });
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
