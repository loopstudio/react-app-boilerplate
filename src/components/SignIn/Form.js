import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { signIn } from 'actions/auth';

const Form = () => {
  const [credentials, setCredentials] = useState({
    email: '',
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
    dispatch(signIn(credentials)).catch(() => {
      setFormStatus({ hasErrors: true, isLoading: false });
      setCredentials({ ...credentials, password: '' });
    });
  };

  const handleFieldChange = (event) => {
    const { value, name } = event.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const { isLoading, hasErrors } = formStatus;
  const { email, password } = credentials;

  return (
    <div>
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit}>
        {isLoading && <p>Loading...</p>}
        {hasErrors && <p>There was an error.</p>}
        <label>Email</label>
        <input name="email" value={email} onChange={handleFieldChange} />
        <label>Password</label>
        <input
          name="password"
          value={password}
          type="password"
          onChange={handleFieldChange}
        />
        <button type="submit">Sign in</button>
      </form>
      <Link to="/sign-up">Sign up</Link>
    </div>
  );
};

export default Form;
