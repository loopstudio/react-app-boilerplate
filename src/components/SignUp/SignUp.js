import React from 'react';
import { FormattedMessage, useIntl } from 'react-intl';

import { AuthWrapper } from 'components';
import {
  Legend,
  NavigationLink,
} from 'components/AuthWrapper/AuthWrapper.styles';
import Form from 'components/SignUp/Form';

const SignUp = () => {
  const intl = useIntl();

  return (
    <AuthWrapper
      renderLegend={() => (
        <>
          <Legend>
            <FormattedMessage id="common.alreadyHaveAnAccount" />
          </Legend>
          <NavigationLink to="/sign-in">
            <FormattedMessage id="common.signIn" />
          </NavigationLink>
        </>
      )}
      title={intl.messages['common.signUp']}
    >
      <Form />
    </AuthWrapper>
  );
};

export default SignUp;
