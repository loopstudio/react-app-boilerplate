import React, { useState } from 'react';
import { IntlProvider } from 'react-intl';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import flatten from 'flat';

import ProtectedRoute from 'components/ProtectedRoute';
import HomePage from 'pages/HomePage';
import NoMatchPage from 'pages/NoMatchPage';
import SignInPage from 'pages/SignInPage';
import SignUpPage from 'pages/SignUpPage';
import { persistor, store } from 'store';
import AppLocale from './languageProvider';

import style from './App.module.scss';

const App = () => {
  // Currently retrieving the locale from the browser but
  // it should come from the database and stored in redux
  const [currentLocale, setCurrentLocale] = useState(navigator.language);
  const currentAppLocale =
    currentLocale in AppLocale ? AppLocale[currentLocale] : AppLocale.en;

  const onChangeLocaleSelect = (event) => {
    const {
      target: { value },
    } = event;
    setCurrentLocale(value);
  };

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <IntlProvider
          locale={currentLocale}
          messages={flatten(currentAppLocale.messages)}
        >
          <select
            name="localeSelect"
            value={currentLocale}
            className={style.localeSelect}
            onChange={onChangeLocaleSelect}
          >
            <option value="en">english</option>
            <option value="es">spanish</option>
          </select>
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
        </IntlProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
