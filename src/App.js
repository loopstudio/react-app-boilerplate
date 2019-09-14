import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from 'components/Home';
import NoMatch from 'components/NoMatch';
import ProtectedRoute from 'components/ProtectedRoute';
import SignIn from 'components/SignIn';
import { persistor, store } from 'store';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <Switch>
            <ProtectedRoute path="/" exact component={Home} />
            <Route path="/sign-in" component={SignIn} />
            <Route component={NoMatch} />
          </Switch>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
};

export default App;
