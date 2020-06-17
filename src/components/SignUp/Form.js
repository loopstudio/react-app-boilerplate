import React from 'react';
import { useIntl } from 'react-intl';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { object, string } from 'yup';

import { signUp } from 'actions/auth';
import Form from 'components/Form';
import { handleErrors } from 'helpers/errors';

const SignUpForm = () => {
  const dispatch = useDispatch();
  const intl = useIntl();
  const history = useHistory();

  const validationSchema = object().shape({
    email: string()
      .required(intl.messages['common.required'])
      .email(intl.messages['common.invalidEmail']),
    firstName: string().required(intl.messages['common.required']),
    lastName: string().required(intl.messages['common.required']),
    password: string()
      .required(intl.messages['common.required'])
      .min(8, intl.messages['common.shortPassword']),
  });

  const formMethods = useForm({ validationSchema });

  const onSubmit = async (values) => {
    try {
      await dispatch(signUp({ locale: intl.locale, ...values }));
      history.replace('/');
    } catch (error) {
      handleErrors(error, formMethods.setError);
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
    </Form>
  );
};

export default SignUpForm;
