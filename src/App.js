import React, { lazy, Suspense, useState } from 'react';
import { IntlProvider } from 'react-intl';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import flatten from 'flat';

import ErrorBoundary from 'components/ErrorBoundary';
import Loading from 'components/Loading';
import ProtectedRoute from 'components/ProtectedRoute';
import { persistor, store } from 'store';
import AppLocale from './languageProvider';

import style from './App.module.scss';

const HomePage = lazy(() => import('pages/HomePage'));
const NoMatchPage = lazy(() => import('pages/NoMatchPage'));
const SignInPage = lazy(() => import('pages/SignInPage'));
const SignUpPage = lazy(() => import('pages/SignUpPage'));

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
            <ErrorBoundary>
              <Suspense fallback={<Loading />}>
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
              </Suspense>
            </ErrorBoundary>
          </BrowserRouter>
        </IntlProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
