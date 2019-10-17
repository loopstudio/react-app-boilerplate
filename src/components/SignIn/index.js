import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import Form from './Form';

const SignIn = ({ location }) => {
  const { from } = location.state || { from: { pathname: '/' } };
  const authenticated = useSelector(
    ({ auth: { userSession } }) => userSession !== null
  );

  if (authenticated) {
    return <Redirect to={from} />;
  }

  return (
    <>
      <h1>Sign In</h1>
      <Form />
      <Link to="/sign-up">Sign up</Link>
    </>
  );
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
