import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from 'components/Home';
import NoMatch from 'components/NoMatch';
import ProtectedRoute from 'components/ProtectedRoute';
import SignIn from 'components/SignIn';
import SignUp from 'components/SignUp';
import { persistor, store } from 'store';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <Switch>
            <ProtectedRoute path="/" exact>
              <Home />
            </ProtectedRoute>
            <Route path="/sign-in" exact>
              <SignIn />
            </Route>
            <Route path="/sign-up" exact>
              <SignUp />
            </Route>
            <Route>
              <NoMatch />
            </Route>
          </Switch>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
};

export default App;
