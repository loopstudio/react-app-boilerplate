import React from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { Link } from 'react-router-dom';

import AuthWrapper from '../AuthWrapper';
import Form from './Form';

import styles from '../AuthWrapper/AuthWrapper.module.scss';

const SignIn = () => {
  const intl = useIntl();

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
