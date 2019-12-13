import React from 'react';
import { useSelector } from 'react-redux';
import { Link, Redirect, useLocation } from 'react-router-dom';

import { checkAuthentication } from 'selectors/auth';
import Form from './Form';
import style from './index.module.scss';

const SignIn = () => {
  const { state } = useLocation();
  const { from } = state || { from: { pathname: '/' } };
  const isAuthenticated = useSelector(checkAuthentication);

  if (isAuthenticated) {
    return <Redirect to={from} />;
  }

  return (
    <div className={style.screen}>
      <div className={style.container}>
        <h1 className={style.title}>Sign In</h1>
        <Form />
        <Link to="/sign-up" className={style.link}>
          Sign up
        </Link>
      </div>
    </div>
  );
};

export default SignIn;
