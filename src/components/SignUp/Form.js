import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { signUp } from 'actions/auth';

const Form = () => {
  const [formStatus, setFormStatus] = useState({
    hasErrors: false,
    isLoading: false,
  });

  const dispatch = useDispatch();

  const SignUpSchema = Yup.object().shape({
    email: Yup.string()
      .email('Invalid email')
      .required('Required'),
    firstName: Yup.string().required('Required'),
    lastName: Yup.string().required('Required'),
    password: Yup.string()
      .min(8, 'Password too short, minimum length is 8 characters')
      .required('Required'),
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      firstName: '',
      lastName: '',
      password: '',
    },
    validationSchema: SignUpSchema,
    onSubmit: (values) => {
      setFormStatus({ hasErrors: false, isLoading: true });
      dispatch(signUp(values)).catch(() => {
        setFormStatus({ hasErrors: true, isLoading: false });
      });
    },
  });

  const {
    values: { email, firstName, lastName, password },
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
      <label>First Name</label>
      <input name="firstName" value={firstName} onChange={handleChange} />
      {touched.firstName && errors.firstName}
      <label>Last Name</label>
      <input name="lastName" value={lastName} onChange={handleChange} />
      {touched.lastName && errors.lastName}
      <label>Password</label>
      <input
        name="password"
        value={password}
        type="password"
        onChange={handleChange}
      />
      {touched.password && errors.password}
      <button type="submit">Sign up</button>
    </form>
  );
};

export default Form;
