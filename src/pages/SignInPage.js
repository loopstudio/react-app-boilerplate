import React from 'react';

import SignIn from 'components/Auth/SignIn';
import AuthLayout from 'layouts/AuthLayout';

const SignInPage = () => {
  return (
    <AuthLayout>
      <SignIn />
    </AuthLayout>
  );
};

export default SignInPage;
