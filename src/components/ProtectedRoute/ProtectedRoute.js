import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route, useLocation } from 'react-router-dom';
import { useAuthentication } from 'hooks/auth';

const ProtectedRoute = ({ children, ...rest }) => {
  const location = useLocation();
  const { isAuthenticated } = useAuthentication();

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
