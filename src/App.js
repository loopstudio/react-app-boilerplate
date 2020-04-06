import React, { lazy, Suspense, useState } from 'react';
import { IntlProvider } from 'react-intl';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import flatten from 'flat';

import ErrorBoundary from 'components/ErrorBoundary';
import Footer from 'components/Footer';
import Loading from 'components/Loading';
import ProtectedRoute from 'components/ProtectedRoute';
import { persistor, store } from 'store';
import AppLocale from './languageProvider';

import styles from './App.module.scss';

const ForgotPasswordPage = lazy(() => import('pages/ForgotPasswordPage'));
const HomePage = lazy(() => import('pages/HomePage'));
const NoMatchPage = lazy(() => import('pages/NoMatchPage'));
const SettingsPage = lazy(() => import('pages/SettingsPage'));
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
          <BrowserRouter>
            <ErrorBoundary>
              <Suspense
                fallback={
                  <div className={styles.loaderWrapper}>
                    <Loading />
                  </div>
                }
              >
                <Switch>
                  <ProtectedRoute path="/settings" exact>
                    <SettingsPage />
                  </ProtectedRoute>
                  <ProtectedRoute path="/" exact>
                    <HomePage />
                  </ProtectedRoute>
                  <Route path="/sign-in">
                    <SignInPage />
                    <Footer
                      onChangeLocaleSelect={onChangeLocaleSelect}
                      currentLocale={currentAppLocale}
                    />
                  </Route>
                  <Route path="/sign-up">
                    <SignUpPage />
                    <Footer
                      onChangeLocaleSelect={onChangeLocaleSelect}
                      currentLocale={currentAppLocale}
                    />
                  </Route>
                  <Route path="/forgot-password" exact>
                    <ForgotPasswordPage />
                    <Footer
                      onChangeLocaleSelect={onChangeLocaleSelect}
                      currentLocale={currentAppLocale}
                    />
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
