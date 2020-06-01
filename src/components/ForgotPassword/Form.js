import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useIntl, FormattedMessage } from 'react-intl';
import { object, string } from 'yup';

import AuthService from 'api/AuthService';
import Form from 'components/Form';
import { handleErrors } from 'helpers/errors';

import styles from './ForgotPassword.module.scss';

const ForgotPasswordForm = () => {
  const intl = useIntl();
  const [isResponseSuccess, setIsResponseSuccess] = useState(false);

  const validationSchema = object().shape({
    email: string()
      .required(intl.messages['common.required'])
      .email(intl.messages['common.invalidEmail']),
  });

  const formMethods = useForm({ validationSchema });

  const onSubmit = async ({ email }) => {
    try {
      await AuthService.resetPassword(email);
      setIsResponseSuccess(true);
    } catch (error) {
      handleErrors(error, formMethods.setError);
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
      {isResponseSuccess && (
        <p className={styles.success}>
          <FormattedMessage id="common.resetPasswordSuccess" />
        </p>
      )}
    </Form>
  );
};

export default ForgotPasswordForm;
