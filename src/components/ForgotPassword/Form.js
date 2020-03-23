import React, { useState } from 'react';
import { Formik } from 'formik';
import { useIntl, FormattedMessage } from 'react-intl';
import { object, string } from 'yup';

import Form from 'components/Form';
import AuthService from 'api/AuthService';

import styles from './ForgotPassword.module.scss';

const initialValues = {
  email: '',
};

const validationSchema = object().shape({
  email: string().email('Invalid email').required('Required'),
});

const ForgotPasswordForm = () => {
  const [isResponseSuccess, setIsResponseSuccess] = useState(false);
  const intl = useIntl();

  const onSubmit = async ({ email }, { setFieldError }) => {
    setIsResponseSuccess(false);
    try {
      await AuthService.resetPassword(email);
      setIsResponseSuccess(true);
    } catch ({ errors }) {
      setFieldError('general', errors[0]);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ errors, handleChange, values, isValid, handleSubmit }) => (
        <Form data-testid="forgot-password-form" onSubmit={handleSubmit}>
          <p className={styles.resetPasswordLegend}>
            <FormattedMessage id="common.forgotPasswordLegend" />
          </p>
          <Form.Input
            id="email"
            name="email"
            type="email"
            value={values.email}
            error={errors.email}
            onChange={handleChange}
          />
          <Form.Button
            isDisabled={!isValid}
            text={intl.messages['common.resetPassword']}
          />
          {errors.general && <p className={styles.error}>{errors.general}</p>}
          {isResponseSuccess && (
            <p className={styles.success}>
              <FormattedMessage id="common.resetPasswordSuccess" />
            </p>
          )}
        </Form>
      )}
    </Formik>
  );
};

export default ForgotPasswordForm;
