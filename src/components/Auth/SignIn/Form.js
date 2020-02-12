import React, { useState } from 'react';
import { Formik } from 'formik';
import { FormattedMessage } from 'react-intl';
import { useDispatch } from 'react-redux';
import { object, string } from 'yup';

import { signIn } from 'actions/auth';
import styles from '../Form.module.scss';

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
  const [hasErrors, setHasErrors] = useState(false);

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
        <form
          data-testid="signin-form"
          onSubmit={handleSubmit}
          className={styles.form}
        >
          <div className={`${errors.email ? styles.invalid : styles.valid}`}>
            <label htmlFor="email-field" className={styles.label}>
              <span className={styles.span}>
                <FormattedMessage id="common.email" />
              </span>
              <input
                htmlFor="email-field"
                name="email"
                type="email"
                data-testid="email-input"
                className={styles.input}
                onChange={handleChange}
                value={values.email}
              />
            </label>
            <span className={styles.error}>{errors.email}</span>
          </div>
          <div className={`${errors.password ? styles.invalid : styles.valid}`}>
            <label htmlFor="password-field" className={styles.label}>
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
              <FormattedMessage id="common.signIn" />
            </button>
          </div>
          {hasErrors && <p>There was an error.</p>}
        </form>
      )}
    </Formik>
  );
};

export default Form;
