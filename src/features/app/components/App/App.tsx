import { lazy, Suspense } from 'react';
import { IntlProvider } from 'react-intl';
import { library } from '@fortawesome/fontawesome-svg-core';
import { BrowserRouter } from 'react-router-dom';
import flatten from 'flat';
import { Global } from '@emotion/react';
import { useAuth } from 'loop-react-auth';

import icons from 'assets/icons';
import { useGuestLocale } from '../../hooks/guestLocale';
import AppLocale from '../../locales';
import ErrorBoundary from '../ErrorBoundary';

import { globalStyles, CustomLoading } from './App.styles';
import { AppLocaleType } from '../ComponentsTypes';

const UnauthenticatedApp = lazy(() => import('../UnauthenticatedApp'));
const AuthenticatedApp = lazy(
  () => import(/* webpackPrefetch: true */ '../AuthenticatedApp')
);

library.add(icons);

const App = () => {
  const { isLoading, isAuthenticated, user } = useAuth();
  const { guestLocale }: any = useGuestLocale();

  const locale = user?.locale || guestLocale;
  const appLocale: AppLocaleType = AppLocale[locale];

  return (
    <IntlProvider locale={locale} messages={flatten(appLocale.messages)}>
      <BrowserRouter>
        <Global styles={globalStyles} />
        <ErrorBoundary>
          {isLoading ? (
            <CustomLoading />
          ) : (
            <Suspense fallback={<CustomLoading />}>
              {isAuthenticated ? <AuthenticatedApp /> : <UnauthenticatedApp />}
            </Suspense>
          )}
        </ErrorBoundary>
      </BrowserRouter>
    </IntlProvider>
  );
};

export default App;
