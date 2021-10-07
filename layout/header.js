import React, {useState} from "../_snowpack/pkg/react.js";
import {Link} from "../_snowpack/pkg/react-router-dom.js";
import {title} from "../config.js";
import {menus, links} from "../links.js";
import {classNames} from "../lib/utils/index.js";
const navigation = menus.map((menu) => {
  return {name: menu.name, href: menu.link, current: false};
});
export default function Example() {
  const [current, setCurrent] = useState(links.home.link);
  return /* @__PURE__ */ React.createElement("div", {
    className: "bg-primary text-white"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "max-w-7xl px-2 sm:px-6 lg:px-8"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "relative flex items-center justify-between h-16"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex-1 flex items-center justify-center sm:items-stretch sm:justify-start"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex-shrink-0 flex items-center"
  }, /* @__PURE__ */ React.createElement(Link, {
    to: links.home.link
  }, title)), /* @__PURE__ */ React.createElement("div", {
    className: "hidden sm:block sm:ml-6"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex space-x-4"
  }, navigation.map((item) => /* @__PURE__ */ React.createElement(Link, {
    onClick: () => setCurrent(item.href),
    key: item.name,
    to: item.href,
    className: classNames(current === item.href ? "text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white", "px-3 py-2 rounded-md text-sm font-medium"),
    "aria-current": item.current ? "page" : void 0
  }, item.name))))))));
}
