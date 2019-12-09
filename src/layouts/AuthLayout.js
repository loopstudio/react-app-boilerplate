import React from 'react';
import PropTypes from 'prop-types';

const AuthLayout = ({ children }) => {
  return <>{children}</>;
};

AuthLayout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default AuthLayout;
