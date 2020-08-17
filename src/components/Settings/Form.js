import React, { useState } from 'react';
import { yupResolver } from '@hookform/resolvers';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { useIntl, FormattedMessage } from 'react-intl';
import { object, string } from 'yup';

import Form from 'components/Form';
import { handleErrors } from 'helpers/errors';
import { useUser } from 'hooks/auth';
import { updateUser } from 'actions/auth';

import { SuccessText, formStyles, buttonStyles } from './Settings.styles';

const SettingsForm = () => {
  const dispatch = useDispatch();
  const intl = useIntl();
  const user = useUser();
  const [isLoading, setIsLoading] = useState(false);
  const [isResponseSuccess, setIsResponseSuccess] = useState(false);

  const defaultValues = {
    firstName: user.firstName,
    lastName: user.lastName,
    locale: user.locale,
  };

  const validationSchema = object().shape({
    firstName: string().required(intl.messages['common.required']),
    lastName: string().required(intl.messages['common.required']),
    locale: string().nullable().required(intl.messages['common.required']),
  });

  const formMethods = useForm({
    defaultValues,
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = async (attributes) => {
    setIsLoading(true);
    try {
      await dispatch(updateUser(attributes));
      setIsResponseSuccess(true);
    } catch (error) {
      handleErrors(error, formMethods.setError);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Form formMethods={formMethods} onSubmit={onSubmit} styles={formStyles}>
      <Form.Input name="firstName" data-testid="firstName-input" />
      <Form.Input name="lastName" data-testid="lastName-input" />
      <Form.Select
        name="locale"
        options={[
          { value: 'en', label: 'English' },
          { value: 'es', label: 'Español' },
        ]}
        data-testid="locale-input"
      />
      <Form.Button
        isLoading={isLoading}
        data-testid="submit-settings-button"
        styles={buttonStyles}
        text={intl.messages['common.updateSettings']}
      />
      {isResponseSuccess && (
        <SuccessText>
          <FormattedMessage id="common.updateSettingsSuccess" />
        </SuccessText>
      )}
    </Form>
  );
};

export default SettingsForm;
