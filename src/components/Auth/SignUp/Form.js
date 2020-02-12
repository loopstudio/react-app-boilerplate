import React, { useState } from 'react';
import { Formik } from 'formik';
import { FormattedMessage } from 'react-intl';
import { useDispatch } from 'react-redux';
import { object, string } from 'yup';

import { signUp } from 'actions/auth';
import styles from '../Form.module.scss';

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
  const [hasError, setHasError] = useState(false);
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
        <form
          className={styles.form}
          data-testid="signup-form"
          onSubmit={handleSubmit}
        >
          <div className={errors.email ? styles.invalid : styles.valid}>
            <label className={styles.label} htmlFor="email-field">
              <span className={styles.span}>
                <FormattedMessage id="common.email" />
              </span>
              <input
                htmlFor="email-field"
                type="email"
                name="email"
                data-testid="email-input"
                className={styles.input}
                onChange={handleChange}
                value={values.email}
              />
            </label>
            <span className={styles.error}>{errors.email}</span>
          </div>
          <div className={errors.firstName ? styles.invalid : styles.valid}>
            <label className={styles.label} htmlFor="firstName-field">
              <span className={styles.span}>
                <FormattedMessage id="common.firstName" />
              </span>
              <input
                htmlFor="firstName-field"
                type="text"
                name="firstName"
                data-testid="firstName-input"
                className={styles.input}
                onChange={handleChange}
                value={values.firstName}
              />
            </label>
            <span className={styles.error}>{errors.firstName}</span>
          </div>

          <div className={errors.lastName ? styles.invalid : styles.valid}>
            <label className={styles.label} htmlFor="lastName-field">
              <span className={styles.span}>
                <FormattedMessage id="common.lastName" />
              </span>
              <input
                htmlFor="lastName-field"
                type="text"
                name="lastName"
                data-testid="lastName-input"
                className={styles.input}
                onChange={handleChange}
                value={values.lastName}
              />
            </label>
            <span className={styles.error}>{errors.lastName}</span>
          </div>
          <div className={errors.password ? styles.invalid : styles.valid}>
            <label className={styles.label} htmlFor="password-field">
              <span className={styles.span}>
                <FormattedMessage id="common.password" />
              </span>
              <input
                htmlFor="password-field"
                name="password"
                type="password"
                data-testid="password-input"
                className={styles.input}
                onChange={handleChange}
                value={values.password}
              />
            </label>
            <span className={styles.error}>{errors.password}</span>
          </div>
          <div className={styles.submit}>
            <button
              type="submit"
              data-testid="submit-button"
              className={styles.button}
              disabled={!isValid}
            >
              <FormattedMessage id="common.signUp" />
            </button>
          </div>
          {hasError && (
            <p data-testid="error-message">
              <FormattedMessage id="common.errorOccurred" />
            </p>
          )}
        </form>
      )}
    </Formik>
  );
};

export default Form;
