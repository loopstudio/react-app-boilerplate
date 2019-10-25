import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Redirect, Route, useLocation } from 'react-router-dom';

const ProtectedRoute = ({ children, ...rest }) => {
  const authenticated = useSelector(
    ({ auth: { userSession } }) => userSession !== null
  );

  const location = useLocation();

  return (
    <Route {...rest}>
      {authenticated ? (
        children
      ) : (
        <Redirect to={{ pathname: '/sign-in', state: { from: location } }} />
      )}
    </Route>
  );
};

ProtectedRoute.propTypes = {
  children: PropTypes.element.isRequired,
};

export default ProtectedRoute;
