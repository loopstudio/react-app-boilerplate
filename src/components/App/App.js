import React, { lazy, Suspense } from 'react';
import { IntlProvider } from 'react-intl';
import { library } from '@fortawesome/fontawesome-svg-core';
import { BrowserRouter } from 'react-router-dom';
import flatten from 'flat';
import { Global } from '@emotion/core';

import icons from 'assets/icons';
import ErrorBoundary from 'components/ErrorBoundary';
import Loading from 'components/Loading';
import { useAuthentication } from 'hooks/auth';
import { useLocale } from 'hooks/locale';
import AppLocale from 'locales';

import { loadingStyles, globalStyles } from 'components/App/App.styles';

const UnauthenticatedApp = lazy(() => import('components/UnauthenticatedApp'));
const AuthenticatedApp = lazy(() =>
  import(/* webpackPrefetch: true */ 'components/AuthenticatedApp')
);

library.add(icons);

const App = () => {
  const locale = useLocale();
  const isAuthenticated = useAuthentication();
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
