import React from 'react';

import SignUp from 'components/SignUp';
import AuthLayout from 'layouts/AuthLayout';

const SignUpPage = () => {
  return (
    <AuthLayout noHeader>
      <SignUp />
    </AuthLayout>
  );
};

export default SignUpPage;
