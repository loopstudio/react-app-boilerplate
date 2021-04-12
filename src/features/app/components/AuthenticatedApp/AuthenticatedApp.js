import { useReducer } from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from '../../pages/HomePage';
import NoMatchPage from '../../pages/NoMatchPage';
import SettingsPage from '../../pages/SettingsPage';
import MainLayout from '../../layouts/MainLayout';

const AuthenticatedApp = () => {
  const [noHeader, toggleNoHeader] = useReducer((prev) => !prev, false);
  return (
    <MainLayout noHeader={noHeader}>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/settings" exact>
          <SettingsPage />
        </Route>
        <Route>
          <NoMatchPage toggleNoHeader={toggleNoHeader} />
        </Route>
      </Switch>
    </MainLayout>
  );
};

export default AuthenticatedApp;
