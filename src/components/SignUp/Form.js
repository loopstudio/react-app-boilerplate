import React, { useState } from 'react';
import { useIntl, FormattedMessage } from 'react-intl';
import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { object, string } from 'yup';

import { signUp } from 'actions/auth';
import Form from 'components/Form';

const initialValues = {
  email: '',
  firstName: '',
  lastName: '',
  password: '',
};

const validationSchema = object().shape({
  email: string().email('Invalid email').required('Required'),
  firstName: string().required('Required'),
  lastName: string().required('Required'),
  password: string()
    .min(8, 'Password too short, minimum length is 8 characters')
    .required('Required'),
});

const SignUpForm = () => {
  const dispatch = useDispatch();
  const [hasError, setHasError] = useState(false);
  const intl = useIntl();

  const onSubmit = async (values) => {
    try {
      await dispatch(signUp(values));
    } catch (error) {
      setHasError(true);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ errors, handleChange, isValid, values, handleSubmit }) => (
        <Form data-testid="signup-form" onSubmit={handleSubmit}>
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
            id="firstName"
            error={errors.firstName}
            value={values.firstName}
            onChange={handleChange}
            name="firstName"
            data-testid="firstName-input"
          />
          <Form.Input
            id="lastName"
            error={errors.lastName}
            value={values.lastName}
            onChange={handleChange}
            name="lastName"
            data-testid="lastName-input"
          />
          <Form.Input
            id="password"
            error={errors.password}
            value={values.password}
            onChange={handleChange}
            name="password"
            type="password"
            data-testid="password-input"
          />
          <Form.Button
            text={intl.messages['common.signUp']}
            isDisabled={!isValid}
          />
          {hasError && <FormattedMessage id="common.errorMessage" />}
        </Form>
      )}
    </Formik>
  );
};

export default SignUpForm;
