import { useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useAuth } from 'loop-react-auth';
import { useIntl } from 'react-intl';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { object, string } from 'yup';

import Form from 'features/app/components/Form';
import { handleErrors } from 'helpers/errors';

const SignUpForm = () => {
  const { signUp } = useAuth();
  const intl = useIntl();
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(false);

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

  const formMethods = useForm({ resolver: yupResolver(validationSchema) });

  const onSubmit = async (values) => {
    setIsLoading(true);
    try {
      await signUp({ locale: intl.locale, ...values });
      history.replace('/');
    } catch (error) {
      setIsLoading(false);
      handleErrors(error, formMethods.setError);
    }
  };

  return (
    <Form
      data-testid="signup-form"
      onSubmit={onSubmit}
      formMethods={formMethods}
    >
      <Form.Input name="email" type="email" />
      <Form.Input name="firstName" />
      <Form.Input name="lastName" />
      <Form.Input name="password" type="password" />
      <Form.Button
        isLoading={isLoading}
        text={intl.messages['common.signUp']}
      />
    </Form>
  );
};

export default SignUpForm;
