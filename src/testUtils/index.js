import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';

import { store } from 'store';

const Wrapper = ({ children }) => (
  <Provider store={store}>
    <BrowserRouter>{children}</BrowserRouter>
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
