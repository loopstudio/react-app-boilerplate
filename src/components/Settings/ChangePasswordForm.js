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

  const { setError, ...formMethods } = useForm({
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
    <Form
      formMethods={formMethods}
      className={styles.settingsForm}
      onSubmit={onSubmit}
    >
      <Form.Input
        label={intl.messages['common.newPassword']}
        name="password"
        type="password"
        data-testid="password-input-settings"
      />
      <Form.Button
        data-testid="submit-password-button"
        className={styles.button}
        text={intl.messages['common.updatePassword']}
      />
      {formMethods.errors?.general && (
        <p className={styles.error}>{formMethods.errors.general.message}</p>
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
