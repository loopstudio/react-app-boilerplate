import React from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { Link, Redirect, useLocation } from 'react-router-dom';

import { useAuthentication } from 'hooks/auth';
import Form from './Form';
import AuthContainer from '../Auth';

import styles from '../Auth/Auth.module.scss';

const SignIn = () => {
  const { state } = useLocation();
  const { from } = state || { from: { pathname: '/' } };
  const { isAuthenticated } = useAuthentication();
  const intl = useIntl();

  if (isAuthenticated) {
    return <Redirect to={from} />;
  }

  return (
    <AuthContainer
      renderLegend={() => (
        <>
          <span className={styles.legend}>
            <FormattedMessage id="common.dontHaveAccountQuestion" />
          </span>
          <Link to="/sign-up" className={styles.link}>
            <span className={styles.signUp}>
              <FormattedMessage id="common.signUp" />
            </span>
          </Link>
        </>
      )}
      title={intl.messages['common.signIn']}
    >
      <Form />
    </AuthContainer>
  );
};

export default SignIn;
