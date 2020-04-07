import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Formik } from 'formik';
import { object, string } from 'yup';
import { useIntl, FormattedMessage } from 'react-intl';

import Form from 'components/Form';
import { useAuthentication } from 'hooks/auth';
import { updateUser } from 'actions/auth';

import styles from './Settings.module.scss';

const validationSchema = object().shape({
  firstName: string().required('Required'),
  lastName: string().required('Required'),
  locale: string().nullable().required('Required'),
});

const SettingsForm = () => {
  const intl = useIntl();
  const dispatch = useDispatch();
  const [isResponseSuccess, setIsResponseSuccess] = useState(false);
  const { user } = useAuthentication();

  const onSubmit = async (attributes, { setErrors, setFieldError }) => {
    try {
      await dispatch(updateUser(attributes));
      setIsResponseSuccess(true);
    } catch ({ errors, attributesErrors }) {
      if (attributesErrors) setErrors(attributesErrors);
      if (errors?.length > 0) setFieldError('general', errors[0]);
    }
  };

  const initialValues = {
    firstName: user.firstName,
    lastName: user.lastName,
    locale: user.locale,
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
            id="firstName"
            value={values.firstName}
            error={errors.firstName}
            name="firstName"
            onChange={handleChange}
            data-testid="firstName-input"
          />
          <Form.Input
            id="lastName"
            value={values.lastName}
            error={errors.lastName}
            name="lastName"
            onChange={handleChange}
            data-testid="lastName-input"
          />
          <Form.Select
            id="locale"
            value={values.locale}
            error={errors.locale}
            name="locale"
            type="password"
            onChange={handleChange}
            options={[
              { value: 'en', label: 'English' },
              { value: 'es', label: 'Español' },
            ]}
            data-testid="locale-input"
          />
          <Form.Button
            type="submit"
            data-testid="submit-settings-button"
            className={styles.button}
            disabled={!isValid}
            text={intl.messages['common.updateSettings']}
          />
          {errors.general && <p className={styles.error}>{errors.general}</p>}
          {isResponseSuccess && (
            <p className={styles.success}>
              <FormattedMessage id="common.updateSettingsSuccess" />
            </p>
          )}
        </Form>
      )}
    </Formik>
  );
};

export default SettingsForm;
