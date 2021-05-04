import { FormattedMessage, useIntl } from 'react-intl';

import AuthWrapper from 'features/auth/components/AuthWrapper';
import {
  Legend,
  NavigationLink,
} from 'features/auth/components/AuthWrapper/AuthWrapper.styles';
import Form from 'features/auth/components/SignIn/Form';

const SignIn = () => {
  const intl = useIntl();
  const title = String(intl.messages['common.signIn']);
  return (
    <AuthWrapper
      renderLegend={() => (
        <>
          <Legend>
            <FormattedMessage id="common.dontHaveAccountQuestion" />
          </Legend>
          <NavigationLink to="/sign-up">
            <FormattedMessage id="common.signUp" />
          </NavigationLink>
        </>
      )}
      title={title}
    >
      <Form />
    </AuthWrapper>
  );
};

export default SignIn;
