import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { signIn } from 'actions/auth';
import styles from './Form.module.scss';

const Form = () => {
  const dispatch = useDispatch();

  const [formStatus, setFormStatus] = useState({
    hasErrors: false,
    isLoading: false,
  });

  const SignInSchema = Yup.object().shape({
    email: Yup.string()
      .email('Invalid email')
      .required('Required'),
    password: Yup.string().required('Required'),
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: SignInSchema,
    onSubmit: (values) => {
      setFormStatus({ ...formStatus, isLoading: true });
      dispatch(signIn(values)).catch(() => {
        setFormStatus({ hasErrors: true, isLoading: false });
      });
    },
  });

  const {
    values: { email, password },
    handleChange,
    handleSubmit,
    errors,
    touched,
  } = formik;
  const { isLoading, hasErrors } = formStatus;

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      {isLoading && <p>Loading...</p>}
      {hasErrors && <p>There was an error.</p>}
      <div className={styles.email}>
        <label className={styles.label}>Email</label>
        <input
          name="email"
          value={email}
          onChange={handleChange}
          className={styles.input}
        />
        {touched.email && errors.email}
      </div>
      <div className={styles.password}>
        <label className={styles.label}>Password</label>
        <input
          name="password"
          value={password}
          type="password"
          onChange={handleChange}
          className={styles.input}
        />
        {touched.password && errors.password}
      </div>
      <div className={styles.submit}>
        <button type="submit" disabled={isLoading} className={styles.button}>
          Sign in
        </button>
      </div>
    </form>
  );
};

export default Form;
