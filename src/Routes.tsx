import React, { FunctionComponent } from 'react';
import { Switch, Redirect } from 'react-router-dom';

import { Main as MainLayout } from './layouts';

import { Home as HomeView } from './pages';
import RouteWithLayout from './components/RouteWithLayout/RouteWithLayout';

const Routes: FunctionComponent = () => {
  return (
    <Switch>
      <Redirect exact from="/" to="/home" />
      <RouteWithLayout
        component={HomeView}
        exact
        layout={MainLayout}
        path="/home"
      />
      <Redirect to="/not-found" />
    </Switch>
  );
};

export default Routes;
