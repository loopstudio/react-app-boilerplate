import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Redirect, Route, useLocation } from 'react-router-dom';

import { checkAuthentication } from 'selectors/auth';

const ProtectedRoute = ({ children, ...rest }) => {
  const location = useLocation();
  const isAuthenticated = useSelector(checkAuthentication);

  return isAuthenticated ? (
    <Route {...rest}>{children}</Route>
  ) : (
    <Redirect to={{ pathname: '/sign-in', state: { from: location } }} />
  );
};

ProtectedRoute.propTypes = {
  children: PropTypes.element.isRequired,
};

export default ProtectedRoute;
