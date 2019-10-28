import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Link, useLocation } from 'react-router-dom';

import Form from './Form';

const SignUp = () => {
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
      <h1>Sign Up</h1>
      <Form />
      <Link to="/sign-in">Sign in</Link>
    </>
  );
};

export default SignUp;
