import { lazy, Suspense } from 'react';
import { IntlProvider } from 'react-intl';
import { library } from '@fortawesome/fontawesome-svg-core';
import { BrowserRouter } from 'react-router-dom';
import flatten from 'flat';
import { Global } from '@emotion/react';

import icons from 'assets/icons';
import { useAuth } from 'features/auth';
import { useGuestLocale } from '../../hooks/guestLocale';
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
  const { isLoading, isAuthenticated, user } = useAuth();
  const { guestLocale } = useGuestLocale();

  const locale = user?.locale || guestLocale;
  const appLocale = AppLocale[locale];

  return (
    <IntlProvider locale={locale} messages={flatten(appLocale.messages)}>
      <BrowserRouter>
        <Global styles={globalStyles} />
        <ErrorBoundary>
          {isLoading ? (
            <Loading styles={loadingStyles} />
          ) : (
            <Suspense fallback={<Loading styles={loadingStyles} />}>
              {isAuthenticated ? <AuthenticatedApp /> : <UnauthenticatedApp />}
            </Suspense>
          )}
        </ErrorBoundary>
      </BrowserRouter>
    </IntlProvider>
  );
};

export default App;
