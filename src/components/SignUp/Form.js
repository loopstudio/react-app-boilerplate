import React, { useState } from 'react';
import { useIntl, FormattedMessage } from 'react-intl';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { object, string } from 'yup';

import { signUp } from 'actions/auth';
import Form from 'components/Form';

const defaultValues = {
  email: '',
  firstName: '',
  lastName: '',
  password: '',
};

const SignUpForm = () => {
  const dispatch = useDispatch();
  const [hasError, setHasError] = useState(false);
  const intl = useIntl();

  const validationSchema = object().shape({
    email: string()
      .email(intl.messages['common.invalidEmail'])
      .required(intl.messages['common.required']),
    firstName: string().required(intl.messages['common.required']),
    lastName: string().required(intl.messages['common.required']),
    password: string()
      .min(8, intl.messages['common.shortPassword'])
      .required(intl.messages['common.required']),
  });

  const formMethods = useForm({
    validationSchema,
    defaultValues,
  });

  const onSubmit = async (values) => {
    try {
      await dispatch(signUp({ locale: intl.locale, ...values }));
    } catch (error) {
      setHasError(true);
    }
  };

  return (
    <Form
      data-testid="signup-form"
      onSubmit={onSubmit}
      formMethods={formMethods}
    >
      <Form.Input name="email" type="email" data-testid="email-input" />
      <Form.Input name="firstName" data-testid="firstName-input" />
      <Form.Input name="lastName" data-testid="lastName-input" />
      <Form.Input
        name="password"
        type="password"
        data-testid="password-input"
      />
      <Form.Button
        data-testid="submit-button"
        text={intl.messages['common.signUp']}
      />
      {hasError && <FormattedMessage id="common.errorMessage" />}
    </Form>
  );
};

export default SignUpForm;
