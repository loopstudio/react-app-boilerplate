import React, { useState } from 'react';
import { useIntl, FormattedMessage } from 'react-intl';
import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { object, string } from 'yup';

import { signIn } from 'actions/auth';
import Form from 'components/Form';

const initialValues = {
  email: '',
  password: '',
};

const validationSchema = object().shape({
  email: string()
    .email('Invalid email')
    .required('Required'),
  password: string().required('Required'),
});

const SignInForm = () => {
  const dispatch = useDispatch();
  const [hasErrors, setHasErrors] = useState(false);
  const intl = useIntl();

  const onSubmit = async (values) => {
    try {
      await dispatch(signIn(values));
    } catch (error) {
      setHasErrors(true);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ errors, handleChange, values, isValid, handleSubmit }) => (
        <Form data-testid="signin-form" onSubmit={handleSubmit}>
          <Form.Input
            id="email"
            error={errors.email}
            value={values.email}
            onChange={handleChange}
            name="email"
            type="email"
            data-testid="email-input"
          />
          <Form.Input
            id="password"
            error={errors.password}
            value={values.password}
            onChange={handleChange}
            name="password"
            type="password"
            helpLinkPath="/forgot-password"
            helpMessage={intl.messages['common.forgotPassword']}
            data-testid="password-input"
          />
          <Form.Button
            text={intl.messages['common.signIn']}
            isDisabled={!isValid}
          />
          {hasErrors && (
            <p>
              <FormattedMessage id="common.errorMessage" />
            </p>
          )}
        </Form>
      )}
    </Formik>
  );
};

export default SignInForm;
