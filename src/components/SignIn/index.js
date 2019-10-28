import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Link, useLocation } from 'react-router-dom';

import Form from './Form';

const SignIn = () => {
  const location = useLocation();
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

export default SignIn;
