import React from 'react';
import { useSelector } from 'react-redux';
import { Link, Redirect, useLocation } from 'react-router-dom';

import { checkAuthentication } from 'selectors/auth';
import Form from './Form';

const SignUp = () => {
  const { state } = useLocation();
  const { from } = state || { from: { pathname: '/' } };
  const isAuthenticated = useSelector(checkAuthentication);

  if (isAuthenticated) {
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

export default SignUp;
