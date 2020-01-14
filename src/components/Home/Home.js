import React from 'react';
import { useDispatch } from 'react-redux';

import { signOut } from 'actions/auth';

const Home = () => {
  const dispatch = useDispatch();

  const handleSignOut = () => {
    dispatch(signOut()).catch(({ errors }) => {
      alert(errors);
    });
  };

  return (
    <div>
      <h1>Hello World</h1>
      <button type="button" onClick={handleSignOut}>
        Sign out
      </button>
    </div>
  );
};

export default Home;
