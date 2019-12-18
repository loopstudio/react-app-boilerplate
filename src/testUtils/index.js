import React from 'react';
import flatten from 'flat';
import PropTypes from 'prop-types';
import { IntlProvider } from 'react-intl';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';

import AppLocale from 'languageProvider';
import { store } from 'store';

const Wrapper = ({ children }) => (
  <Provider store={store}>
    <IntlProvider locale="en" messages={flatten(AppLocale.en.messages)}>
      <BrowserRouter>{children}</BrowserRouter>
    </IntlProvider>
  </Provider>
);

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

const renderWithProviders = (ui, options) => {
  return render(ui, { wrapper: Wrapper, ...options });
};

// re-export everything
export * from '@testing-library/react';
export * from './fieldHelpers';

// override render method
export { renderWithProviders as render };
