import React from "../../../_snowpack/pkg/react.js";
import {Switch, Route, Link, useLocation} from "../../../_snowpack/pkg/react-router-dom.js";
import * as U from "./utils.js";
const Nav = ({
  navs,
  option
}) => /* @__PURE__ */ React.createElement("ul", {
  id: "tabs",
  className: "inline-flex w-full px-1 pt-2 "
}, navs.map((nav, i) => {
  const {pathname} = useLocation();
  const isSelected = U.getIsSelected(pathname, nav.path, navs);
  const classInactive = "px-4 py-2 font-semibold text-gray-800 rounded-t opacity-50";
  const classActive = "px-4 py-2 -mb-px font-semibold text-gray-800 border-b-2 border-blue-400 rounded-t opacity-50";
  return /* @__PURE__ */ React.createElement("li", {
    key: i,
    className: i === option ? classActive : classInactive
  }, /* @__PURE__ */ React.createElement(Link, {
    className: `nav-link ${isSelected ? "active" : ""}`,
    to: nav.path
  }, nav.label));
}));
const Router = ({navs}) => /* @__PURE__ */ React.createElement(Switch, null, navs.map((l, i) => /* @__PURE__ */ React.createElement(Route, {
  key: i,
  path: l.path,
  component: l.Component
})));
export default ({
  navs,
  urlPrefix = "",
  option = 0
}) => {
  const list = navs.map((x, i) => {
    const path = U.toHref(x, urlPrefix);
    if (window.location.pathname.match(new RegExp("^" + path))) {
      option = i;
    }
    return {path, ...x};
  });
  const listRouter = [...list].sort((a, b) => b.path.length - a.path.length);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Nav, {
    option,
    navs: list
  }), /* @__PURE__ */ React.createElement(Router, {
    navs: listRouter
  }));
};
