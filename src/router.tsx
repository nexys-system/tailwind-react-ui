import React from "react";
import { Route, Switch } from "react-router-dom";

import { links, components, formComponents, crud, specs } from "./links";
import Home from "./app/home";

import { ContextProvider } from "./lib";

const {
  Notification: { Context, Type },
} = ContextProvider;

const NotFound = () => (
  <p>
    <i>Page Not Found</i>
  </p>
);

export default () => (
  <ContextProvider.Notification.Provider>
    <Switch>
      <Route exact path={links.home.link} component={Home} />
      {components.map(({ link, Component, exact }, i) => (
        <Route
          key={i}
          exact={exact === undefined ? true : exact}
          path={link}
          component={Component}
        />
      ))}
      {crud.map(({ link, Component, exact }, i) => (
        <Route
          key={i}
          exact={exact === undefined ? true : exact}
          path={link}
          component={Component}
        />
      ))}
      {formComponents.map(({ link, Component }, i) => (
        <Route key={i} exact path={link} component={Component} />
      ))}
      {specs.map(({ link, Component }, i) => (
        <Route key={i} exact path={link} component={Component} />
      ))}
      <Route component={NotFound} />
    </Switch>
  </ContextProvider.Notification.Provider>
);
