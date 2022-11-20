import React, { lazy } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

const Home = lazy(() => import("pages/Home"));
const Repository = lazy(() => import("pages/Repository"));

export enum RouteLink {
  Home = "/",
  Repository = "/:owner/:repo",
}

const Routes = () => (
  <Switch>
    <Route path={RouteLink.Home} exact component={Home} />
    <Route path={RouteLink.Repository} exact component={Repository} />

    <Redirect to={RouteLink.Home} />
  </Switch>
);

export default Routes;
