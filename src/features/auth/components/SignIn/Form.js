/* eslint-disable jsx-a11y/tabindex-no-positive */
import React, { useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useIntl } from 'react-intl';
import { useHistory } from 'react-router-dom';
import { object, string } from 'yup';

import { useAuth } from 'features/auth';
import Form from 'features/app/components/Form';
import { handleErrors } from 'helpers/errors';

const SignInForm = () => {
  const { signIn } = useAuth();
  const intl = useIntl();
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(false);

  const validationSchema = object().shape({
    email: string()
      .email(intl.messages['common.invalidEmail'])
      .required(intl.messages['common.required']),
    password: string().required(intl.messages['common.required']),
  });

  const formMethods = useForm({ resolver: yupResolver(validationSchema) });

  const onSubmit = async (values) => {
    setIsLoading(true);
    try {
      await signIn(values);
      history.replace('/');
    } catch (error) {
      setIsLoading(false);
      handleErrors(error, formMethods.setError);
    }
  };

  return (
    <Form
      data-testid="signin-form"
      formMethods={formMethods}
      onSubmit={onSubmit}
    >
      <Form.Input name="email" tabIndex="1" type="email" />
      <Form.Input
        helpLinkPath="/forgot-password"
        helpMessage={intl.messages['common.forgotPassword']}
        name="password"
        tabIndex="2"
        type="password"
      />
      <Form.Button
        isLoading={isLoading}
        text={intl.messages['common.signIn']}
      />
    </Form>
  );
};

export default SignInForm;
