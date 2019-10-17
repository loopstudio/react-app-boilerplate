import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { signUp } from 'actions/auth';

const Form = () => {
  const [user, setUser] = useState({
    email: '',
    firstName: '',
    lastName: '',
    password: '',
  });
  const [formStatus, setFormStatus] = useState({
    hasErrors: false,
    isLoading: false,
  });

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormStatus({ hasErrors: false, isLoading: true });
    dispatch(signUp(user)).catch(() => {
      setFormStatus({ hasErrors: true, isLoading: false });
      setUser({ ...user, password: '' });
    });
  };

  const handleFieldChange = (event) => {
    const { value, name } = event.target;
    setUser({ ...user, [name]: value });
  };

  const { isLoading, hasErrors } = formStatus;
  const { email, firstName, lastName, password } = user;

  return (
    <form onSubmit={handleSubmit}>
      {isLoading && <p>Loading...</p>}
      {hasErrors && <p>There was an error.</p>}
      <label>Email</label>
      <input name="email" value={email} onChange={handleFieldChange} />
      <label>First Name</label>
      <input name="firstName" value={firstName} onChange={handleFieldChange} />
      <label>Last Name</label>
      <input name="lastName" value={lastName} onChange={handleFieldChange} />
      <label>Password</label>
      <input
        name="password"
        value={password}
        type="password"
        onChange={handleFieldChange}
      />
      <button type="submit">Sign up</button>
    </form>
  );
};

export default Form;
