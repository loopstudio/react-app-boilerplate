import React, { useState } from 'react';
import { Formik } from 'formik';
import { object, string } from 'yup';
import { useIntl, FormattedMessage } from 'react-intl';

import Form from 'components/Form';
import AuthService from 'api/AuthService';

import styles from './Settings.module.scss';

const initialValues = {
  password: '',
};

const validationSchema = object().shape({
  password: string().required('Required'),
});

const ChangePasswordForm = () => {
  const intl = useIntl();
  const [isResponseSuccess, setIsResponseSuccess] = useState(false);

  const onSubmit = async ({ password }, { setErrors, setFieldError }) => {
    try {
      await AuthService.updatePassword(password);
      setIsResponseSuccess(true);
    } catch ({ errors, attributesErrors }) {
      if (attributesErrors)
        setErrors({ password: attributesErrors?.password?.[0] });
      if (errors?.length > 0) setFieldError('general', errors[0]);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ errors, handleChange, values, isValid, handleSubmit }) => (
        <Form className={styles.settingsForm} onSubmit={handleSubmit}>
          <Form.Input
            id="password"
            label={intl.messages['common.newPassword']}
            value={values.password}
            error={errors.password}
            name="password"
            type="password"
            onChange={handleChange}
            data-testid="password-input"
          />
          <Form.Button
            type="submit"
            data-testid="submit-password-button"
            className={styles.button}
            disabled={!isValid}
            text={intl.messages['common.updatePassword']}
          />
          {errors.general && <p className={styles.error}>{errors.general}</p>}
          {isResponseSuccess && (
            <p className={styles.success}>
              <FormattedMessage id="common.changePasswordSuccess" />
            </p>
          )}
        </Form>
      )}
    </Formik>
  );
};

export default ChangePasswordForm;
