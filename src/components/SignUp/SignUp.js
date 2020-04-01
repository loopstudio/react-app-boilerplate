import React from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { Link, Redirect, useLocation } from 'react-router-dom';

import AuthWrapper from 'components/AuthWrapper';
import { useAuthentication } from 'hooks/auth';
import Form from './Form';

import style from '../AuthWrapper/AuthWrapper.module.scss';

const SignUp = () => {
  const { state } = useLocation();
  const { from } = state || { from: { pathname: '/' } };
  const { isAuthenticated } = useAuthentication();
  const intl = useIntl();

  if (isAuthenticated) {
    return <Redirect to={from} />;
  }

  return (
    <AuthWrapper
      renderLegend={() => (
        <>
          <span className={style.legend}>
            <FormattedMessage id="common.alreadyHaveAnAccount" />
          </span>
          <Link to="/sign-in" className={style.link}>
            <FormattedMessage id="common.signIn" />
          </Link>
        </>
      )}
      title={intl.messages['common.signUp']}
    >
      <Form />
    </AuthWrapper>
  );
};

export default SignUp;
