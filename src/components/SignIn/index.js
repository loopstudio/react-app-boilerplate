import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

const SignIn = ({ location }) => {
  const authenticated = useSelector(({ auth }) => auth.userSession !== null);
  const { from } = location.state || { from: { pathname: '/' } };
  return authenticated ? <Redirect to={from} /> : <h1>Sign in</h1>;
};

SignIn.propTypes = {
  location: PropTypes.object.isRequired,
};

export default SignIn;
