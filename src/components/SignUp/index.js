import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Form from './Form';

const SignIn = ({ location }) => {
  const { from } = location.state || { from: { pathname: '/' } };
  const authenticated = useSelector(
    ({ auth: { userSession } }) => userSession !== null
  );

  return authenticated ? <Redirect to={from} /> : <Form />;
};

SignIn.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      from: PropTypes.shape({
        pathname: PropTypes.string,
      }),
    }),
  }).isRequired,
};

export default SignIn;
