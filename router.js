import React from "./_snowpack/pkg/react.js";
import {Route, Switch} from "./_snowpack/pkg/react-router-dom.js";
import {links, components, formComponents, crud, specs} from "./links.js";
import Home from "./app/home/index.js";
import {ContextProvider} from "./lib/index.js";
const {
  Notification: {Context, Type}
} = ContextProvider;
const NotFound = () => /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("i", null, "Page Not Found"));
export default () => /* @__PURE__ */ React.createElement(ContextProvider.Notification.Provider, null, /* @__PURE__ */ React.createElement(Switch, null, /* @__PURE__ */ React.createElement(Route, {
  exact: true,
  path: links.home.link,
  component: Home
}), components.map(({link, Component, exact}, i) => /* @__PURE__ */ React.createElement(Route, {
  key: i,
  exact: exact === void 0 ? true : exact,
  path: link,
  component: Component
})), crud.map(({link, Component, exact}, i) => /* @__PURE__ */ React.createElement(Route, {
  key: i,
  exact: exact === void 0 ? true : exact,
  path: link,
  component: Component
})), formComponents.map(({link, Component}, i) => /* @__PURE__ */ React.createElement(Route, {
  key: i,
  exact: true,
  path: link,
  component: Component
})), specs.map(({link, Component}, i) => /* @__PURE__ */ React.createElement(Route, {
  key: i,
  exact: true,
  path: link,
  component: Component
})), /* @__PURE__ */ React.createElement(Route, {
  component: NotFound
})));
