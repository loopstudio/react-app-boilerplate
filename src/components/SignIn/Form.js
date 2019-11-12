import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { signIn } from 'actions/auth';

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
    <form onSubmit={handleSubmit}>
      {isLoading && <p>Loading...</p>}
      {hasErrors && <p>There was an error.</p>}
      <label>Email</label>
      <input name="email" value={email} onChange={handleChange} />
      {touched.email && errors.email}
      <label>Password</label>
      <input
        name="password"
        value={password}
        type="password"
        onChange={handleChange}
      />
      {touched.password && errors.password}
      <button type="submit" disabled={isLoading}>
        Sign in
      </button>
    </form>
  );
};

export default Form;
