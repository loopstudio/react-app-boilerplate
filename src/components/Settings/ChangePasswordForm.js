import React, { useState } from 'react';
import { yupResolver } from '@hookform/resolvers';
import { useForm } from 'react-hook-form';
import { object, string } from 'yup';
import { useIntl, FormattedMessage } from 'react-intl';

import Form from 'components/Form';
import { handleErrors } from 'helpers/errors';
import AuthService from 'services/AuthService';

import { SuccessText, formStyles, buttonStyles } from './Settings.styles';

const ChangePasswordForm = () => {
  const intl = useIntl();
  const [isLoading, setIsLoading] = useState(false);
  const [isResponseSuccess, setIsResponseSuccess] = useState(false);

  const validationSchema = object().shape({
    password: string()
      .required(intl.messages['common.required'])
      .min(8, intl.messages['common.shortPassword']),
    currentPassword: string().required(intl.messages['common.required']),
  });

  const formMethods = useForm({ resolver: yupResolver(validationSchema) });

  const onSubmit = async ({ password, currentPassword }) => {
    setIsLoading(true);
    try {
      await AuthService.updateUser({ password }, currentPassword);
      setIsResponseSuccess(true);
      formMethods.reset(
        { currentPassword: '', password: '' },
        { errors: true }
      );
    } catch (error) {
      setIsResponseSuccess(false);
      handleErrors(error, formMethods.setError);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Form formMethods={formMethods} onSubmit={onSubmit} styles={formStyles}>
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
        isLoading={isLoading}
        data-testid="submit-password-button"
        styles={buttonStyles}
        text={intl.messages['common.updatePassword']}
      />
      {isResponseSuccess && (
        <SuccessText>
          <FormattedMessage id="common.changePasswordSuccess" />
        </SuccessText>
      )}
    </Form>
  );
};

export default ChangePasswordForm;
