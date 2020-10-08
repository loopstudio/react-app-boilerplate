import React from 'react';

import { SignUp } from 'components';
import AuthLayout from 'layouts/AuthLayout';

const SignUpPage = () => (
  <AuthLayout noHeader>
    <SignUp />
  </AuthLayout>
);

export default SignUpPage;
