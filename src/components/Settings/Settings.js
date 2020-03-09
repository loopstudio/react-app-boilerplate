import React, { useState } from 'react';
import { Formik } from 'formik';
import { object, string } from 'yup';
import { useIntl, FormattedMessage } from 'react-intl';

import Form from 'components/Form';
import Title from 'components/Title';
import AuthService from 'api/AuthService';

import styles from './Settings.module.scss';

const initialValues = {
  newPassword: '',
};

const validationSchema = object().shape({
  newPassword: string().required('Required'),
});

const Settings = () => {
  const intl = useIntl();
  const [isResponseSuccess, setIsResponseSuccess] = useState(false);

  const onSubmit = async ({ newPassword }, { setFieldError }) => {
    try {
      await AuthService.updatePassword(newPassword);
      setIsResponseSuccess(true);
    } catch ({ errors }) {
      setFieldError('general', errors[0]);
    }
  };

  return (
    <div className={styles.settingsContent}>
      <div className={styles.settingsContainer}>
        <Title type="h2" className={styles.title}>
          <FormattedMessage id="common.accountSettings" />
        </Title>
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
        >
          {({ errors, handleChange, values, isValid, handleSubmit }) => (
            <Form className={styles.settingsForm} onSubmit={handleSubmit}>
              <Form.Input
                id="newPassword"
                value={values.newPassword}
                error={errors.newPassword}
                name="newPassword"
                type="password"
                onChange={handleChange}
              />
              <Form.Button
                type="submit"
                data-testid="submit-button"
                className={styles.button}
                disabled={!isValid}
                text={intl.messages['common.updatePassword']}
              />
              {errors.general && (
                <p className={styles.error}>{errors.general}</p>
              )}
              {isResponseSuccess && (
                <p className={styles.success}>
                  <FormattedMessage id="common.changePasswordSuccess" />
                </p>
              )}
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Settings;
