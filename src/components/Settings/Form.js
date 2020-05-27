import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { object, string } from 'yup';
import { useIntl, FormattedMessage } from 'react-intl';

import Form from 'components/Form';
import { useAuthentication } from 'hooks/auth';
import { updateUser } from 'actions/auth';

import styles from './Settings.module.scss';

const validationSchema = object().shape({
  firstName: string().required('Required'),
  lastName: string().required('Required'),
  locale: string().nullable().required('Required'),
});

const SettingsForm = () => {
  const intl = useIntl();
  const dispatch = useDispatch();
  const [isResponseSuccess, setIsResponseSuccess] = useState(false);
  const { user } = useAuthentication();

  const defaultValues = {
    firstName: user.firstName,
    lastName: user.lastName,
    locale: user.locale,
  };

  const { setError, ...formMethods } = useForm({
    validationSchema,
    defaultValues,
  });

  const onSubmit = async (attributes) => {
    try {
      await dispatch(updateUser(attributes));
      setIsResponseSuccess(true);
    } catch ({ errors: error }) {
      if (error?.length > 0) {
        setError('general', 'custom', error[0]);
      }
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
      {formMethods.errors?.general && (
        <p className={styles.error}>{formMethods.errors.general.message}</p>
      )}
      {isResponseSuccess && (
        <p className={styles.success}>
          <FormattedMessage id="common.updateSettingsSuccess" />
        </p>
      )}
    </Form>
  );
};

export default SettingsForm;
