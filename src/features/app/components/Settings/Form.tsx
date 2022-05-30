import { useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useAuth } from 'loop-react-auth';
import { useForm } from 'react-hook-form';
import { useIntl, FormattedMessage } from 'react-intl';
import { object, string } from 'yup';

import Form from 'features/app/components/Form';
import { handleErrors } from 'helpers/errors';

import { SuccessText, StyledForm, FormButton } from './Settings.styles';

const SettingsForm = () => {
  const intl = useIntl();
  const { user, updateUser } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [isResponseSuccess, setIsResponseSuccess] = useState(false);

  const defaultValues: any = {
    firstName: user?.firstName,
    lastName: user?.lastName,
    locale: user?.locale,
  };

  const validationSchema = object().shape({
    firstName: string().required(intl.formatMessage({ id: 'common.required' })),
    lastName: string().required(intl.formatMessage({ id: 'common.required' })),
    locale: string()
      .nullable()
      .required(intl.formatMessage({ id: 'common.required' })),
  });

  const formMethods = useForm({
    defaultValues,
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = async (attributes: any) => {
    setIsLoading(true);
    try {
      await updateUser(attributes, '');
      setIsResponseSuccess(true);
    } catch (e) {
      const error: any = e;
      handleErrors(error, formMethods.setError);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <StyledForm formMethods={formMethods} onSubmit={onSubmit}>
      <Form.Input id="firstName" name="firstName" />
      <Form.Input id="lastName" name="lastName" />
      <Form.Select
        id="locale"
        name="locale"
        options={[
          { value: 'en', label: 'English' },
          { value: 'es', label: 'Español' },
        ]}
      />
      <FormButton
        isLoading={isLoading}
        text={intl.messages['common.updateSettings']}
      />
      {isResponseSuccess && (
        <SuccessText>
          <FormattedMessage id="common.updateSettingsSuccess" />
        </SuccessText>
      )}
    </StyledForm>
  );
};

export default SettingsForm;
