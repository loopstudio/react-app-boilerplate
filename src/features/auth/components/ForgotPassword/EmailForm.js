import { useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useAuth } from 'loop-react-auth';
import { useForm } from 'react-hook-form';
import { useIntl, FormattedMessage } from 'react-intl';
import { object, string } from 'yup';
import PropTypes from 'prop-types';

import Form from 'features/app/components/Form';
import Loading from 'features/app/components/Loading';
import { handleErrors } from 'helpers/errors';
import { RESET_PASSWORD_STEPS } from 'features/auth/components/ForgotPassword/ForgotPassword';

import {
  FormInput,
  Legend,
} from 'features/auth/components/ForgotPassword/ForgotPassword.styles';

const EmailForm = ({ onStepChange }) => {
  const [loading, setLoading] = useState(false);
  const intl = useIntl();
  const { requestPasswordReset } = useAuth();

  const validationSchema = object().shape({
    email: string()
      .required(intl.messages['common.required'])
      .email(intl.messages['common.invalidEmail']),
  });

  const formMethods = useForm({ resolver: yupResolver(validationSchema) });

  const onSubmit = async ({ email }) => {
    setLoading(true);

    try {
      await requestPasswordReset(email);
      onStepChange(RESET_PASSWORD_STEPS.emailSent);
    } catch (errors) {
      handleErrors(errors, formMethods.setError);
      setLoading(false);
    }
  };

  return (
    <Form
      data-testid="forgot-password-email-form"
      onSubmit={onSubmit}
      formMethods={formMethods}
    >
      <Legend>
        <FormattedMessage id="common.forgotPasswordLegend" />
      </Legend>
      <FormInput name="email" type="email" />
      <Form.Button text={intl.messages['common.resetPassword']} />
      {loading && <Loading />}
    </Form>
  );
};

EmailForm.propTypes = {
  onStepChange: PropTypes.func.isRequired,
};

export default EmailForm;
