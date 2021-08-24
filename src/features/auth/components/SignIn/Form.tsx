import { useCallback, useMemo, useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useAuth } from '@loopstudio/react-auth';
import { useForm } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';
import { useHistory } from 'react-router-dom';
import { object, string } from 'yup';

import Form from 'features/app/components/Form';
// import { handleErrors } from 'helpers/errors';

import { ForgotPasswordLink } from './SignIn.styles';

type SignInData = {
  email: string;
  password: string;
};

type AttributesErrors = {
  [prop: string]: any;
};

type RequestError = {
  attributesErrors?: AttributesErrors;
  errors?: string[];
};

const SignInForm = () => {
  const { signIn } = useAuth();
  const { formatMessage } = useIntl();
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(false);

  const validationSchema = useMemo(
    () =>
      object().shape({
        email: string()
          .email(formatMessage({ id: 'common.invalidEmail' }))
          .required(formatMessage({ id: 'common.required' })),
        password: string().required(formatMessage({ id: 'common.required' })),
      }),
    []
  );

  const formMethods = useForm<SignInData>({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = useCallback(async (values: SignInData) => {
    //   setIsLoading(true);
    //   try {
    //     await signIn(values);
    //     history.replace('/');
    //   } catch (error) {
    //     handleErrors(error as RequestError, formMethods.setError);
    //   } finally {
    //     setIsLoading(false);
    //   }
  }, []);

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
        text={formatMessage({ id: 'common.signIn' })}
      />
    </Form>
  );
};

export default SignInForm;
