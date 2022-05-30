import { useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useAuth } from 'loop-react-auth';
import { useForm } from 'react-hook-form';
import { object, string } from 'yup';
import { useIntl, FormattedMessage } from 'react-intl';

import Form from 'features/app/components/Form';
import { handleErrors } from 'helpers/errors';

import { SuccessText, StyledForm, FormButton } from './Settings.styles';

const ChangePasswordForm = () => {
  const intl = useIntl();
  const { updateUser } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [isResponseSuccess, setIsResponseSuccess] = useState(false);

  const validationSchema = object().shape({
    password: string()
      .required(intl.formatMessage({ id: 'common.required' }))
      .min(8, intl.formatMessage({ id: 'common.shortPassword' })),
    currentPassword: string().required(
      intl.formatMessage({ id: 'common.required' })
    ),
  });

  const formMethods = useForm({ resolver: yupResolver(validationSchema) });

  const onSubmit = async ({ password, currentPassword }: any) => {
    setIsLoading(true);
    try {
      await updateUser({ password }, currentPassword);
      setIsResponseSuccess(true);
      formMethods.reset({ currentPassword: undefined, password: undefined });
    } catch (e) {
      setIsResponseSuccess(false);
      const error: any = e;
      handleErrors(error, formMethods.setError);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <StyledForm formMethods={formMethods} onSubmit={onSubmit}>
      <Form.Input
        id="currentPassword"
        label={intl.formatMessage({ id: 'common.currentPassword' })}
        name="currentPassword"
        type="password"
      />
      <Form.Input
        id="password"
        label={intl.formatMessage({ id: 'common.newPassword' })}
        name="password"
        type="password"
      />
      <FormButton
        isLoading={isLoading}
        text={intl.messages['common.updatePassword']}
      />
      {isResponseSuccess && (
        <SuccessText>
          <FormattedMessage id="common.changePasswordSuccess" />
        </SuccessText>
      )}
    </StyledForm>
  );
};

export default ChangePasswordForm;
