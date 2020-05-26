import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useIntl, FormattedMessage } from 'react-intl';
import { object, string } from 'yup';

import Form from 'components/Form';
import AuthService from 'api/AuthService';

import styles from './ForgotPassword.module.scss';

const defaultValues = {
  email: '',
};

const ForgotPasswordForm = () => {
  const [isResponseSuccess, setIsResponseSuccess] = useState(false);
  const [error, setError] = useState('');
  const intl = useIntl();

  const validationSchema = object().shape({
    email: string()
      .email(intl.messages['common.invalidEmail'])
      .required(intl.messages['common.required']),
  });

  const formMethods = useForm({
    validationSchema,
    defaultValues,
  });

  const onSubmit = async ({ email }) => {
    setIsResponseSuccess(false);
    try {
      await AuthService.resetPassword(email);
      setIsResponseSuccess(true);
    } catch ({ errors }) {
      setError(errors?.[0]);
    }
  };

  return (
    <Form
      data-testid="forgot-password-form"
      onSubmit={onSubmit}
      formMethods={formMethods}
    >
      <p className={styles.resetPasswordLegend}>
        <FormattedMessage id="common.forgotPasswordLegend" />
      </p>
      <Form.Input className={styles.emailInput} name="email" type="email" />
      <Form.Button text={intl.messages['common.resetPassword']} />
      {error && <p className={styles.error}>{error}</p>}
      {isResponseSuccess && (
        <p className={styles.success}>
          <FormattedMessage id="common.resetPasswordSuccess" />
        </p>
      )}
    </Form>
  );
};

export default ForgotPasswordForm;
