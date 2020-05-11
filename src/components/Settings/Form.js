import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
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

  const defaultValues = {
    firstName: user.firstName,
    lastName: user.lastName,
    locale: user.locale,
  };

  const { handleSubmit, register, errors, setError } = useForm({
    validationSchema,
    defaultValues,
  });

  const onSubmit = async (attributes) => {
    try {
      await dispatch(updateUser(attributes));
      setIsResponseSuccess(true);
    } catch ({ errors: error }) {
      if (error?.length > 0) {
        setError('general', 'custom', error[0]);
      }
    }
  };

  return (
    <Form className={styles.settingsForm} onSubmit={handleSubmit(onSubmit)}>
      <Form.Input
        id="firstName"
        error={errors.firstName}
        name="firstName"
        data-testid="firstName-input"
        ref={register}
      />
      <Form.Input
        id="lastName"
        error={errors.lastName}
        name="lastName"
        data-testid="lastName-input"
        ref={register}
      />
      <Form.Select
        id="locale"
        error={errors.locale}
        name="locale"
        type="password"
        options={[
          { value: 'en', label: 'English' },
          { value: 'es', label: 'Español' },
        ]}
        data-testid="locale-input"
        ref={register}
      />
      <Form.Button
        type="submit"
        data-testid="submit-settings-button"
        className={styles.button}
        text={intl.messages['common.updateSettings']}
      />
      {errors?.general && (
        <p className={styles.error}>{errors.general.message}</p>
      )}
      {isResponseSuccess && (
        <p className={styles.success}>
          <FormattedMessage id="common.updateSettingsSuccess" />
        </p>
      )}
    </Form>
  );
};

export default SettingsForm;
