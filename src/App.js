import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

import ProtectedRoute from 'components/ProtectedRoute';
import HomePage from 'pages/HomePage';
import NoMatchPage from 'pages/NoMatchPage';
import SignInPage from 'pages/SignInPage';
import SignUpPage from 'pages/SignUpPage';
import { persistor, store } from 'store';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <Switch>
            <ProtectedRoute path="/" exact>
              <HomePage />
            </ProtectedRoute>
            <Route path="/sign-in" exact>
              <SignInPage />
            </Route>
            <Route path="/sign-up" exact>
              <SignUpPage />
            </Route>
            <Route>
              <NoMatchPage />
            </Route>
          </Switch>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
};

export default App;
