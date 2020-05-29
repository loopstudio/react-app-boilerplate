import React, { useState } from 'react';
import { useIntl } from 'react-intl';

import AuthWrapper from 'components/AuthWrapper';
import EmailForm from './EmailForm';
import PasswordForm from './PasswordForm';
import TokenForm from './TokenForm';

export const RESET_PASSWORD_STEPS = {
  initial: 0,
  emailSent: 1,
  updatePassword: 2,
};

const ForgotPassword = () => {
  const intl = useIntl();
  const [resetStep, setResetStep] = useState(RESET_PASSWORD_STEPS.initial);
  const [token, setToken] = useState();

  const handleStepChange = (step) => setResetStep(step);

  const handleSaveToken = (newToken) => setToken(newToken);

  return (
    <AuthWrapper title={intl.messages['common.resetPassword']}>
      <>
        {resetStep === RESET_PASSWORD_STEPS.initial && (
          <EmailForm onStepChange={handleStepChange} />
        )}
        {resetStep === RESET_PASSWORD_STEPS.emailSent && (
          <TokenForm
            onSaveToken={handleSaveToken}
            onStepChange={handleStepChange}
          />
        )}
        {resetStep === RESET_PASSWORD_STEPS.updatePassword && (
          <PasswordForm token={token} />
        )}
      </>
    </AuthWrapper>
  );
};

export default ForgotPassword;
