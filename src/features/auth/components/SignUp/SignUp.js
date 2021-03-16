import { FormattedMessage, useIntl } from 'react-intl';

import AuthWrapper from 'features/auth/components/AuthWrapper';
import {
  Legend,
  NavigationLink,
} from 'features/auth/components/AuthWrapper/AuthWrapper.styles';
import Form from 'features/auth/components/SignUp/Form';

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
