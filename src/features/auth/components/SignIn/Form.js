import { useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useAuth } from 'loop-react-auth';
import { useForm } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';
import { useHistory } from 'react-router-dom';
import { object, string } from 'yup';

import Form from 'features/app/components/Form';
import { handleErrors } from 'helpers/errors';

import { ForgotPasswordLink } from './SignIn.styles';

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
      <Form.Input name="email" type="email" />
      <Form.Input name="password" type="password" />
      <ForgotPasswordLink to="/forgot-password">
        <FormattedMessage id="common.forgotPassword" />
      </ForgotPasswordLink>
      <Form.Button
        isLoading={isLoading}
        text={intl.messages['common.signIn']}
      />
    </Form>
  );
};

export default SignInForm;
