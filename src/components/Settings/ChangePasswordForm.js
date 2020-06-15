import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { object, string } from 'yup';
import { useIntl, FormattedMessage } from 'react-intl';

import Form from 'components/Form';
import { handleErrors } from 'helpers/errors';
import AuthService from 'services/AuthService';

import { SuccessText, formStyles, buttonStyles } from './Settings.styles';

const ChangePasswordForm = () => {
  const intl = useIntl();
  const [isResponseSuccess, setIsResponseSuccess] = useState(false);

  const validationSchema = object().shape({
    password: string().required(intl.messages['common.required']),
  });

  const formMethods = useForm({ validationSchema });

  const onSubmit = async ({ password }) => {
    try {
      await AuthService.updateUser({ password });
      setIsResponseSuccess(true);
    } catch (error) {
      handleErrors(error, formMethods.setError);
    }
  };

  return (
    <Form formMethods={formMethods} onSubmit={onSubmit} styles={formStyles}>
      <Form.Input
        label={intl.messages['common.newPassword']}
        name="password"
        type="password"
        data-testid="password-input-settings"
      />
      <Form.Button
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
