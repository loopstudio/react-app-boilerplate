import { useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useAuth } from '@loopstudio/react-auth';
import { useForm } from 'react-hook-form';
import { useIntl, FormattedMessage } from 'react-intl';
import { object, string } from 'yup';
import PropTypes from 'prop-types';

import Form from 'features/app/components/Form';
import Loading from 'features/app/components/Loading';
import { handleErrors } from 'helpers/errors';
import { RESET_PASSWORD_STEPS } from 'features/auth/components/ForgotPassword/ForgotPassword';

import {
  Legend,
  FormInput,
  LinkButton,
} from 'features/auth/components/ForgotPassword/ForgotPassword.styles';

const TokenForm = ({ onStepChange, onSaveToken }) => {
  const [loading, setLoading] = useState(false);
  const intl = useIntl();
  const { verifyPasswordReset } = useAuth();

  const validationSchema = object().shape({
    token: string()
      .length(6, intl.messages['common.lengthToken'])
      .required(intl.messages['common.required']),
  });

  const formMethods = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = async ({ token }) => {
    setLoading(true);

    try {
      await verifyPasswordReset(token);
      onSaveToken(token);
      onStepChange(RESET_PASSWORD_STEPS.updatePassword);
    } catch (error) {
      handleErrors(error, formMethods.setError);
      setLoading(false);
    }
  };

  return (
    <Form
      data-testid="forgot-password-token-form"
      onSubmit={onSubmit}
      formMethods={formMethods}
    >
      <Legend>
        <FormattedMessage id="common.forgotPasswordEmailSent" />
      </Legend>
      <FormInput name="token" type="number" />
      <LinkButton
        type="button"
        onClick={() => onStepChange(RESET_PASSWORD_STEPS.initial)}
      >
        <FormattedMessage id="common.forgotPasswordEmailResend" />
      </LinkButton>
      <Form.Button text={intl.messages['common.next']} />
      {loading && <Loading />}
    </Form>
  );
};

TokenForm.propTypes = {
  onStepChange: PropTypes.func.isRequired,
  onSaveToken: PropTypes.func.isRequired,
};

export default TokenForm;
