import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { object, string } from 'yup';
import { useIntl, FormattedMessage } from 'react-intl';

import Form from 'components/Form';
import { handleErrors } from 'helpers/errors';
import AuthService from 'services/AuthService';

import styles from './Settings.module.scss';

const ChangePasswordForm = () => {
  const intl = useIntl();
  const [isResponseSuccess, setIsResponseSuccess] = useState(false);

  const validationSchema = object().shape({
    password: string()
      .required(intl.messages['common.required'])
      .min(8, intl.messages['common.shortPassword']),
    currentPassword: string().required(intl.messages['common.required']),
  });

  const formMethods = useForm({ validationSchema });

  const onSubmit = async ({ password, currentPassword }) => {
    try {
      await AuthService.updateUser({ password }, currentPassword);
      setIsResponseSuccess(true);
      formMethods.setValue([{ password: '' }, { currentPassword: '' }]);
    } catch (error) {
      setIsResponseSuccess(false);
      handleErrors(error, formMethods.setError);
    }
  };

  return (
    <Form
      formMethods={formMethods}
      className={styles.settingsForm}
      onSubmit={onSubmit}
    >
      <Form.Input
        label={intl.messages['common.currentPassword']}
        name="currentPassword"
        type="password"
        data-testid="current-password-input-settings"
      />
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
      {isResponseSuccess && (
        <p className={styles.success}>
          <FormattedMessage id="common.changePasswordSuccess" />
        </p>
      )}
    </Form>
  );
};

export default ChangePasswordForm;
