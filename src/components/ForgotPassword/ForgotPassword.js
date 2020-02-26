import React from 'react';
import { useIntl } from 'react-intl';

import Form from './Form';
import AuthContainer from '../Auth';

const ForgotPassword = () => {
  const intl = useIntl();
  return (
    <AuthContainer title={intl.messages['common.resetPassword']}>
      <Form />
    </AuthContainer>
  );
};

export default ForgotPassword;
