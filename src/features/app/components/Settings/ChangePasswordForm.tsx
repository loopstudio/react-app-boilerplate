import { useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useAuth } from '@loopstudio/react-auth';
import { useForm } from 'react-hook-form';
import { object, string } from 'yup';
import { useIntl, FormattedMessage } from 'react-intl';

import Form from 'features/app/components/Form';
import { handleErrors } from 'helpers/errors';

import { SuccessText, formStyles, buttonStyles } from './Settings.styles';

type FormValues = {
  currentPassword: string;
  password: string;
};

const ChangePasswordForm = () => {
  const intl = useIntl();
  const { updateUser } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [isResponseSuccess, setIsResponseSuccess] = useState(false);

  const validationSchema = object().shape({
    password: string()
      .required(intl.messages['common.required'])
      .min(8, intl.messages['common.shortPassword']),
    currentPassword: string().required(intl.messages['common.required']),
  });

  const formMethods = useForm<FormValues>({
    resolver: yupResolver(validationSchema),
  }); // esto es lo q se esta pasando con formMethods

  const onSubmit = async ({ password, currentPassword }: FormValues) => {
    setIsLoading(true);
    try {
      await updateUser({ password }, currentPassword);
      setIsResponseSuccess(true);
      formMethods.reset(
        { currentPassword: '', password: '' },
        { keepErrors: true }
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
      />
      <Form.Input
        label={intl.messages['common.newPassword']}
        name="password"
        type="password"
      />
      <Form.Button
        isLoading={isLoading}
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
