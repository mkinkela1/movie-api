import React, { FunctionComponent } from 'react';
import { Switch, Redirect } from 'react-router-dom';

import { Main as MainLayout, Movie as MovieLayout } from './layouts';

import { Home as HomeView, Movie as MovieView } from './pages';
import { RouteWithLayout } from './components';

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
      <RouteWithLayout
        component={MovieView}
        exact
        layout={MovieLayout}
        path="/movie/:id"
      />
      <Redirect to="/home" />
    </Switch>
  );
};

export default Routes;
