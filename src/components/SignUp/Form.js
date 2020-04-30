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

const validationSchema = object().shape({
  email: string().email('Invalid email').required('Required'),
  firstName: string().required('Required'),
  lastName: string().required('Required'),
  password: string()
    .min(8, 'Password too short, minimum length is 8 characters')
    .required('Required'),
});

const SignUpForm = () => {
  const dispatch = useDispatch();
  const [hasError, setHasError] = useState(false);
  const intl = useIntl();

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
