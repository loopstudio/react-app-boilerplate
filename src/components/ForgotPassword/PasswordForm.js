import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useIntl, FormattedMessage } from 'react-intl';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { object, ref, string } from 'yup';
import PropTypes from 'prop-types';

import { resetPassword } from 'actions/auth';
import Form from 'components/Form';
import Loading from 'components/Loading';
import { handleErrors } from 'helpers/errors';

import styles from './ForgotPassword.module.scss';

const PasswordForm = ({ token }) => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  const intl = useIntl();

  const validationSchema = object().shape({
    password: string().required(intl.messages['common.required']),
    confirmPassword: string().oneOf(
      [ref('password'), null],
      intl.messages['common.passwordsDontMatch']
    ),
  });

  const formMethods = useForm({
    validationSchema,
  });

  const onSubmit = async ({ password }) => {
    setLoading(true);

    try {
      await dispatch(resetPassword({ password, token }));
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
      <p className={styles.resetPasswordLegend}>
        <FormattedMessage id="common.forgotPasswordChange" />
      </p>
      <Form.Input
        className={styles.formInput}
        name="password"
        type="password"
      />
      <Form.Input
        className={styles.formInput}
        name="confirmPassword"
        type="password"
      />
      <Form.Button text={intl.messages['common.next']} />
      {loading && <Loading />}
    </Form>
  );
};

PasswordForm.propTypes = {
  token: PropTypes.string.isRequired,
};

export default PasswordForm;
