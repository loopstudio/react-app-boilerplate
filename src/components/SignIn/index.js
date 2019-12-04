import React from 'react';
import { useSelector } from 'react-redux';
import { Link, Redirect, useLocation } from 'react-router-dom';

import Form from './Form';
import style from './index.module.css';

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
