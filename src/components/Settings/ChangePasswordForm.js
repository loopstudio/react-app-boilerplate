import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { object, string } from 'yup';
import { useIntl, FormattedMessage } from 'react-intl';

import Form from 'components/Form';
import AuthService from 'api/AuthService';

import styles from './Settings.module.scss';

const defaultValues = {
  password: '',
};

const validationSchema = object().shape({
  password: string().required('Required'),
});

const ChangePasswordForm = () => {
  const intl = useIntl();
  const [isResponseSuccess, setIsResponseSuccess] = useState(false);

  const { handleSubmit, register, errors, setError } = useForm({
    validationSchema,
    defaultValues,
  });

  const onSubmit = async ({ password }) => {
    try {
      await AuthService.updatePassword(password);
      setIsResponseSuccess(true);
    } catch ({ errors: error, attributesErrors }) {
      if (attributesErrors) {
        setError('password', 'custom', attributesErrors?.password[0]);
      }
      if (error?.length > 0) setError('general', 'custom', error[0]);
    }
  };

  return (
    <Form className={styles.settingsForm} onSubmit={handleSubmit(onSubmit)}>
      <Form.Input
        id="password"
        label={intl.messages['common.newPassword']}
        error={errors.password}
        name="password"
        type="password"
        data-testid="password-input-settings"
        ref={register}
      />
      <Form.Button
        type="submit"
        data-testid="submit-password-button"
        className={styles.button}
        text={intl.messages['common.updatePassword']}
      />
      {errors?.general && (
        <p className={styles.error}>{errors.general.message}</p>
      )}
      {isResponseSuccess && (
        <p className={styles.success}>
          <FormattedMessage id="common.changePasswordSuccess" />
        </p>
      )}
    </Form>
  );
};

export default ChangePasswordForm;
