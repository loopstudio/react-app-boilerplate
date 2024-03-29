import { useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useAuth } from 'loop-react-auth';
import { useForm } from 'react-hook-form';
import { useIntl, FormattedMessage } from 'react-intl';
import { useHistory } from 'react-router-dom';
import { object, ref, string } from 'yup';
import PropTypes from 'prop-types';

import Form from 'features/app/components/Form';
import Loading from 'features/app/components/Loading';
import { handleErrors } from 'helpers/errors';

import {
  Legend,
  FormInput,
} from 'features/auth/components/ForgotPassword/ForgotPassword.styles';

const PasswordForm = ({ token }) => {
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const intl = useIntl();
  const { resetPassword } = useAuth();

  const validationSchema = object().shape({
    password: string().required(intl.messages['common.required']),
    confirmPassword: string().oneOf(
      [ref('password'), null],
      intl.messages['common.passwordsDontMatch']
    ),
  });

  const formMethods = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = async ({ password }) => {
    setLoading(true);

    try {
      await resetPassword(password, token);
      history.push({
        pathname: '/',
        search: '?resetPassword=success',
      });
    } catch (errors) {
      handleErrors(errors, formMethods.setError);
      setLoading(false);
    }
  };

  return (
    <Form
      data-testid="forgot-password-password-form"
      onSubmit={onSubmit}
      formMethods={formMethods}
    >
      <Legend>
        <FormattedMessage id="common.forgotPasswordChange" />
      </Legend>
      <FormInput name="password" type="password" />
      <FormInput name="confirmPassword" type="password" />
      <Form.Button text={intl.messages['common.next']} />
      {loading && <Loading />}
    </Form>
  );
};

PasswordForm.propTypes = {
  token: PropTypes.string.isRequired,
};

export default PasswordForm;
