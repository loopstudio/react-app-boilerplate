import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useIntl, FormattedMessage } from 'react-intl';
import { object, string } from 'yup';
import PropTypes from 'prop-types';

import Form from 'components/Form';
import Loading from 'components/Loading';
import { handleErrors } from 'helpers/errors';
import AuthService from 'services/AuthService';
import { RESET_PASSWORD_STEPS } from './ForgotPassword';

import { inputStyles, Legend } from './ForgotPassword.styles';

const EmailForm = ({ onStepChange }) => {
  const [loading, setLoading] = useState(false);
  const intl = useIntl();

  const validationSchema = object().shape({
    email: string()
      .required(intl.messages['common.required'])
      .email(intl.messages['common.invalidEmail']),
  });

  const formMethods = useForm({ validationSchema });

  const onSubmit = async ({ email }) => {
    setLoading(true);

    try {
      await AuthService.getVerificationCode(email);
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
      <Form.Input styles={inputStyles} name="email" type="email" />
      <Form.Button text={intl.messages['common.resetPassword']} />
      {loading && <Loading />}
    </Form>
  );
};

EmailForm.propTypes = {
  onStepChange: PropTypes.func.isRequired,
};

export default EmailForm;
