import React, { lazy, Suspense } from 'react';
import { IntlProvider } from 'react-intl';
import { library } from '@fortawesome/fontawesome-svg-core';
import { useSelector } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import flatten from 'flat';

import icons from 'assets/icons';
import AppLocale from 'languageProvider';
import ErrorBoundary from 'components/ErrorBoundary';
import Loading from 'components/Loading';
import ProtectedRoute from 'components/ProtectedRoute';

import styles from './App.module.scss';

const ForgotPasswordPage = lazy(() => import('pages/ForgotPasswordPage'));
const HomePage = lazy(() => import('pages/HomePage'));
const NoMatchPage = lazy(() => import('pages/NoMatchPage'));
const SettingsPage = lazy(() => import('pages/SettingsPage'));
const SignInPage = lazy(() => import('pages/SignInPage'));
const SignUpPage = lazy(() => import('pages/SignUpPage'));

library.add(icons);

const App = () => {
  const currentLocale = useSelector(
    ({ auth: { user, guestLocale } }) => user?.locale || guestLocale
  );
  const currentAppLocale =
    currentLocale in AppLocale ? AppLocale[currentLocale] : AppLocale.en;

  return (
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
              </Route>
              <Route path="/sign-up">
                <SignUpPage />
              </Route>
              <Route path="/forgot-password" exact>
                <ForgotPasswordPage />
              </Route>
              <Route>
                <NoMatchPage />
              </Route>
            </Switch>
          </Suspense>
        </ErrorBoundary>
      </BrowserRouter>
    </IntlProvider>
  );
};

export default App;
