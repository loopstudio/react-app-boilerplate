import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Link, Redirect, useLocation } from 'react-router-dom';

import { useAuthentication } from 'hooks/auth';
import Form from './Form';

const SignUp = () => {
  const { state } = useLocation();
  const { from } = state || { from: { pathname: '/' } };
  const { isAuthenticated } = useAuthentication();

  if (isAuthenticated) {
    return <Redirect to={from} />;
  }

  return (
    <>
      <h1>
        <FormattedMessage id="common.signUp" />
      </h1>
      <Form />
      <Link to="/sign-in">
        <FormattedMessage id="common.signIn" />
      </Link>
    </>
  );
};

export default SignUp;
