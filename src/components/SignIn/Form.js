import React, { useState } from 'react';
import { useIntl, FormattedMessage } from 'react-intl';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { object, string } from 'yup';

import { signIn } from 'actions/auth';
import Form from 'components/Form';

const defaultValues = {
  email: '',
  password: '',
};

const SignInForm = () => {
  const dispatch = useDispatch();
  const [hasErrors, setHasErrors] = useState(false);
  const intl = useIntl();

  const validationSchema = object().shape({
    email: string()
      .email(intl.messages['common.invalidEmail'])
      .required(intl.messages['common.required']),
    password: string().required(intl.messages['common.required']),
  });

  const formMethods = useForm({
    validationSchema,
    defaultValues,
  });

  const onSubmit = async (values) => {
    try {
      await dispatch(signIn(values));
    } catch (error) {
      setHasErrors(true);
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
      {hasErrors && (
        <p>
          <FormattedMessage id="common.errorMessage" />
        </p>
      )}
    </Form>
  );
};

export default SignInForm;
