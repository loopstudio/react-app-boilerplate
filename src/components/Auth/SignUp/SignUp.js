import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Link, Redirect, useLocation } from 'react-router-dom';

import { useAuthentication } from 'hooks/auth';
import Form from './Form';
import style from '../Auth.module.scss';

const SignUp = () => {
  const { state } = useLocation();
  const { from } = state || { from: { pathname: '/' } };
  const { isAuthenticated } = useAuthentication();

  if (isAuthenticated) {
    return <Redirect to={from} />;
  }

  return (
    <div className={style.screen}>
      <div className={style.viewContainer}>
        <div className={style.authContainer}>
          <h1 className={style.title}>
            <FormattedMessage id="common.signUp" />
          </h1>
          <Form />
        </div>
        <div className={style.legendContainer}>
          <span className={style.legend}>
            <FormattedMessage id="common.alreadyHaveAnAccount" />
          </span>
          <Link to="/sign-in" className={style.link}>
            <span className={style.signUp}>
              <FormattedMessage id="common.signIn" />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
