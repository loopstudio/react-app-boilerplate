import React, { lazy, Suspense } from 'react';
import { IntlProvider } from 'react-intl';
import { library } from '@fortawesome/fontawesome-svg-core';
import { BrowserRouter } from 'react-router-dom';
import flatten from 'flat';
import { Global } from '@emotion/react';

import icons from 'assets/icons';
import { useAuth } from 'features/auth';
import { useLocale } from '../../hooks/locale';
import AppLocale from '../../locales';

import { loadingStyles, globalStyles } from './App.styles';
import Loading from '../Loading';
import ErrorBoundary from '../ErrorBoundary';

const UnauthenticatedApp = lazy(() => import('../UnauthenticatedApp'));
const AuthenticatedApp = lazy(() =>
  import(/* webpackPrefetch: true */ '../AuthenticatedApp')
);

library.add(icons);

const App = () => {
  // TODO: move guest locale to a context in app?
  const locale = 'en'; // useLocale();
  const { isLoading, isAuthenticated } = useAuth();
  const appLocale = AppLocale[locale] || AppLocale.en;

  return (
    <IntlProvider locale={locale} messages={flatten(appLocale.messages)}>
      <BrowserRouter>
        <Global styles={globalStyles} />
        <ErrorBoundary>
          <Suspense fallback={<Loading styles={loadingStyles} />}>
            {isAuthenticated ? <AuthenticatedApp /> : <UnauthenticatedApp />}
          </Suspense>
        </ErrorBoundary>
      </BrowserRouter>
    </IntlProvider>
  );
};

export default App;
