import React from 'react';
import { useIntl } from 'react-intl';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { object, string } from 'yup';

import { signIn } from 'actions/auth';
import Form from 'components/Form';
import { handleErrors } from 'helpers/errors';

const SignInForm = () => {
  const dispatch = useDispatch();
  const intl = useIntl();

  const validationSchema = object().shape({
    email: string()
      .email(intl.messages['common.invalidEmail'])
      .required(intl.messages['common.required']),
    password: string().required(intl.messages['common.required']),
  });

  const formMethods = useForm({ validationSchema });

  const onSubmit = async (values) => {
    try {
      await dispatch(signIn(values));
    } catch (error) {
      handleErrors(error, formMethods.setError);
    }
  };

  return (
    <Form
      data-testid="signin-form"
      onSubmit={onSubmit}
      formMethods={formMethods}
    >
      <Form.Input name="email" type="email" data-testid="email-input" />
      <Form.Input
        name="password"
        type="password"
        helpLinkPath="/forgot-password"
        helpMessage={intl.messages['common.forgotPassword']}
        data-testid="password-input"
      />
      <Form.Button
        data-testid="submit-button"
        text={intl.messages['common.signIn']}
      />
    </Form>
  );
};

export default SignInForm;
