import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';

import Form from './Form';

const SignUp = ({ location }) => {
  const { from } = location.state || { from: { pathname: '/' } };
  const authenticated = useSelector(
    ({ auth: { userSession } }) => userSession !== null
  );

  if (authenticated) {
    return <Redirect to={from} />;
  }

  return (
    <>
      <h1>Sign Up</h1>
      <Form />
      <Link to="/sign-in">Sign in</Link>
    </>
  );
};

SignUp.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      from: PropTypes.shape({
        pathname: PropTypes.string,
      }),
    }),
  }).isRequired,
};

export default SignUp;
