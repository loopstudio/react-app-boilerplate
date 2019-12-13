import React, { useState } from 'react';
import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { object, string } from 'yup';

import { signIn } from 'actions/auth';
import styles from './Form.module.scss';

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

const Form = () => {
  const dispatch = useDispatch();

  const [formStatus, setFormStatus] = useState({
    hasErrors: false,
    isLoading: false,
  });

  const onSubmit = async (values) => {
    setFormStatus({ hasErrors: false, isLoading: true });

    try {
      await dispatch(signIn(values));
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
        values: { email, password },
      }) => (
        <form
          data-testid="signin-form"
          onSubmit={handleSubmit}
          className={styles.form}
        >
          {isLoading && <p>Loading...</p>}
          {hasErrors && <p>There was an error.</p>}
          <div className={styles.email}>
            <label htmlFor="email-field" className={styles.label}>
              Email
              <input
                htmlFor="email-field"
                name="email"
                type="email"
                data-testid="email-input"
                value={email}
                onChange={handleChange}
                className={styles.input}
              />
            </label>
            {touched.email && errors.email}
          </div>
          <div className={styles.password}>
            <label htmlFor="password-field" className={styles.label}>
              Password
              <input
                htmlFor="password-field"
                name="password"
                type="password"
                data-testid="password-input"
                value={password}
                onChange={handleChange}
                className={styles.input}
              />
            </label>
            {touched.password && errors.password}
          </div>
          <div className={styles.submit}>
            <button
              type="submit"
              data-testid="submit-button"
              disabled={!isValid || isLoading}
              className={styles.button}
            >
              Sign in
            </button>
          </div>
        </form>
      )}
    </Formik>
  );
};

export default Form;
