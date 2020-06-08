import React from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { Link, Redirect, useLocation } from 'react-router-dom';

import { useAuthentication } from 'hooks/auth';
import AuthWrapper from '../AuthWrapper';
import Form from './Form';

import styles from '../AuthWrapper/AuthWrapper.module.scss';

const SignIn = () => {
  const { state } = useLocation();
  const { from } = state || { from: { pathname: '/' } };
  const isAuthenticated = useAuthentication();
  const intl = useIntl();

  if (isAuthenticated) {
    return <Redirect to={from} />;
  }

  return (
    <AuthWrapper
      renderLegend={() => (
        <>
          <span className={styles.legend}>
            <FormattedMessage id="common.dontHaveAccountQuestion" />
          </span>
          <Link to="/sign-up" className={styles.link}>
            <FormattedMessage id="common.signUp" />
          </Link>
        </>
      )}
      title={intl.messages['common.signIn']}
    >
      <Form />
    </AuthWrapper>
  );
};

export default SignIn;
