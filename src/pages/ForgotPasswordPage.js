import React from 'react';
import { useIntl } from 'react-intl';

import AuthWrapper from 'components/AuthWrapper';
import Form from 'components/ForgotPassword/Form';
import MainLayout from 'layouts/MainLayout';

const HomePage = () => {
  const intl = useIntl();

  return (
    <MainLayout>
      <AuthWrapper title={intl.messages['common.resetPassword']}>
        <Form />
      </AuthWrapper>
    </MainLayout>
  );
};

export default HomePage;
