import React, { useState } from 'react';
import { Formik } from 'formik';
import { FormattedMessage } from 'react-intl';
import { useDispatch } from 'react-redux';
import { object, string } from 'yup';

import { signUp } from 'actions/auth';

const initialValues = {
  email: '',
  firstName: '',
  lastName: '',
  password: '',
};

const validationSchema = object().shape({
  email: string()
    .email('Invalid email')
    .required('Required'),
  firstName: string().required('Required'),
  lastName: string().required('Required'),
  password: string()
    .min(8, 'Password too short, minimum length is 8 characters')
    .required('Required'),
});

const Form = () => {
  const dispatch = useDispatch();

  const [formStatus, setFormStatus] = useState({
    hasErrors: false,
    isLoading: false,
  });

  const onSubmit = async (values) => {
    setFormStatus({ hasErrors: false, isLoading: true });

    try {
      await dispatch(signUp(values));
    } catch (error) {
      setFormStatus({ hasErrors: true, isLoading: false });
    }
  };

  const { isLoading, hasErrors } = formStatus;

  return (
    <Formik
      validateOnMount
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({
        errors,
        handleChange,
        handleSubmit,
        isValid,
        touched,
        values: { email, firstName, lastName, password },
      }) => (
        <form data-testid="signup-form" onSubmit={handleSubmit}>
          {isLoading && <p>Loading...</p>}
          {hasErrors && <p>There was an error.</p>}
          <label htmlFor="email-field">
            <FormattedMessage id="common.email" />
            <input
              htmlFor="email-field"
              type="email"
              name="email"
              data-testid="email-input"
              value={email}
              onChange={handleChange}
            />
          </label>
          {touched.email && errors.email}
          <label htmlFor="fistName-field">
            <FormattedMessage id="common.firstName" />
            <input
              htmlFor="fistName-field"
              type="text"
              name="firstName"
              data-testid="firstName-input"
              value={firstName}
              onChange={handleChange}
            />
          </label>
          {touched.firstName && errors.firstName}
          <label htmlFor="lastName-field">
            <FormattedMessage id="common.lastName" />
            <input
              htmlFor="lastName-field"
              type="text"
              name="lastName"
              data-testid="lastName-input"
              value={lastName}
              onChange={handleChange}
            />
          </label>
          {touched.lastName && errors.lastName}
          <label htmlFor="password-field">
            <FormattedMessage id="common.password" />
            <input
              htmlFor="password-field"
              name="password"
              type="password"
              data-testid="password-input"
              value={password}
              onChange={handleChange}
            />
          </label>
          {touched.password && errors.password}
          <button
            type="submit"
            data-testid="submit-button"
            disabled={!isValid || isLoading}
          >
            Sign up
          </button>
        </form>
      )}
    </Formik>
  );
};

export default Form;
