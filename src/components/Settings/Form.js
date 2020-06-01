import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { object, string } from 'yup';
import { useIntl, FormattedMessage } from 'react-intl';

import Form from 'components/Form';
import { handleErrors } from 'helpers/errors';
import { useAuthentication } from 'hooks/auth';
import { updateUser } from 'actions/auth';

import styles from './Settings.module.scss';

const SettingsForm = () => {
  const intl = useIntl();
  const dispatch = useDispatch();
  const { user } = useAuthentication();
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

  const formMethods = useForm({ defaultValues, validationSchema });

  const onSubmit = async (attributes) => {
    try {
      await dispatch(updateUser(attributes));
      setIsResponseSuccess(true);
    } catch (error) {
      handleErrors(error, formMethods.setError);
    }
  };

  return (
    <Form
      formMethods={formMethods}
      className={styles.settingsForm}
      onSubmit={onSubmit}
    >
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
        data-testid="submit-settings-button"
        className={styles.button}
        text={intl.messages['common.updateSettings']}
      />
      {isResponseSuccess && (
        <p className={styles.success}>
          <FormattedMessage id="common.updateSettingsSuccess" />
        </p>
      )}
    </Form>
  );
};

export default SettingsForm;
