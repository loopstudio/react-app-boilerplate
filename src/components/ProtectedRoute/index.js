import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const authenticated = useSelector(
    ({ auth: { userSession } }) => userSession !== null
  );

  return (
    <Route
      {...rest}
      render={(params) => (
        authenticated ? (
          <Component {...params} />
        ) : (
          <Redirect
            to={{ pathname: '/sign-in', state: { from: params.location } }}
          />
        )
      )}
    />
  );
};

ProtectedRoute.propTypes = {
  component: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.func,
  ]).isRequired,
};

export default ProtectedRoute;
