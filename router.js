import React from "./_snowpack/pkg/react.js";
import {Route, Switch} from "./_snowpack/pkg/react-router-dom.js";
import {links, components, formComponents} from "./links.js";
import Home from "./app/home/index.js";
const NotFound = () => /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("i", null, "Page Not Found"));
export default () => {
  return /* @__PURE__ */ React.createElement(Switch, null, /* @__PURE__ */ React.createElement(Route, {
    exact: true,
    path: links.home.link,
    component: Home
  }), components.map(({link, Component}, i) => /* @__PURE__ */ React.createElement(Route, {
    key: i,
    exact: true,
    path: link,
    component: Component
  })), formComponents.map(({link, Component}, i) => /* @__PURE__ */ React.createElement(Route, {
    key: i,
    exact: true,
    path: link,
    component: Component
  })), /* @__PURE__ */ React.createElement(Route, {
    component: NotFound
  }));
};
