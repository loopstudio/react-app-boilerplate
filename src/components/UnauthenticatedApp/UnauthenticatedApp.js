import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import ForgotPasswordPage from 'pages/ForgotPasswordPage';
import SignInPage from 'pages/SignInPage';
import SignUpPage from 'pages/SignUpPage';

const UnauthenticatedApp = () => (
  <Switch>
    <Route path="/sign-in">
      <SignInPage />
    </Route>
    <Route path="/sign-up">
      <SignUpPage />
    </Route>
    <Route path="/forgot-password" exact>
      <ForgotPasswordPage />
    </Route>
    <Redirect to="/sign-in" />
  </Switch>
);

export default UnauthenticatedApp;
