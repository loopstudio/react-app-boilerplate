import React from 'react';

import SignIn from 'components/SignIn';
import AuthLayout from 'layouts/AuthLayout';

const SignInPage = () => (
  <AuthLayout noHeader>
    <SignIn />
  </AuthLayout>
);

export default SignInPage;
