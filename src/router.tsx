import React from "react";
import { Route, Switch } from "react-router-dom";

import { links, components, formComponents } from "./links";
import Home from "./app/home";

const NotFound = () => (
  <p>
    <i>Page Not Found</i>
  </p>
);

export default () => {
  return (
    <Switch>
      <Route exact path={links.home.link} component={Home} />
      {components.map(({ link, Component }, i) => (
        <Route key={i} exact path={link} component={Component} />
      ))}
      {formComponents.map(({ link, Component }, i) => (
        <Route key={i} exact path={link} component={Component} />
      ))}
      <Route component={NotFound} />
    </Switch>
  );
};
