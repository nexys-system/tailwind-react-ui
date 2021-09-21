import React from "react";
import { Route, Switch } from "react-router-dom";

import { links } from "./links";
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
      \
      <Route component={NotFound} />
    </Switch>
  );
};
