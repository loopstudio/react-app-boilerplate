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

  const { handleSubmit, register, errors } = useForm({
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
    <Form data-testid="signup-form" onSubmit={handleSubmit(onSubmit)}>
      <Form.Input
        id="email"
        error={errors.email}
        name="email"
        type="email"
        data-testid="email-input"
        ref={register}
      />
      <Form.Input
        id="firstName"
        error={errors.firstName}
        name="firstName"
        data-testid="firstName-input"
        ref={register}
      />
      <Form.Input
        id="lastName"
        error={errors.lastName}
        name="lastName"
        data-testid="lastName-input"
        ref={register}
      />
      <Form.Input
        id="password"
        error={errors.password}
        name="password"
        type="password"
        data-testid="password-input"
        ref={register}
      />
      <Form.Button text={intl.messages['common.signUp']} />
      {hasError && <FormattedMessage id="common.errorMessage" />}
    </Form>
  );
};

export default SignUpForm;
