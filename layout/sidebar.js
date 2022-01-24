import React from "../_snowpack/pkg/react.js";
import {Link} from "../_snowpack/pkg/react-router-dom.js";
import {components, formComponents, crud, specs} from "../links.js";
const Sidebar = () => {
  return /* @__PURE__ */ React.createElement("div", {
    className: "hidden sm:block bg-gray-50 w-64 p-5 pl-10 content-area overflow-scroll"
  }, /* @__PURE__ */ React.createElement("h3", {
    className: "ph-1 text-xl"
  }, "General"), /* @__PURE__ */ React.createElement("ul", null, specs.map((c, i) => /* @__PURE__ */ React.createElement("li", {
    key: i,
    className: "text-primary hover:text-primary-800"
  }, /* @__PURE__ */ React.createElement(Link, {
    to: c.link
  }, c.name)))), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("h3", {
    className: "ph-1 text-xl mt-5"
  }, "Components"), /* @__PURE__ */ React.createElement("ul", null, components.map((c, i) => /* @__PURE__ */ React.createElement("li", {
    key: i,
    className: "text-primary hover:text-primary-800"
  }, /* @__PURE__ */ React.createElement(Link, {
    to: c.link
  }, c.name)))), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("h3", {
    className: "ph-1 text-xl"
  }, "CRUD"), /* @__PURE__ */ React.createElement("ul", null, crud.map((c, i) => /* @__PURE__ */ React.createElement("li", {
    key: i,
    className: "text-primary hover:text-primary-800"
  }, /* @__PURE__ */ React.createElement(Link, {
    to: c.link
  }, c.name)))), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("h3", {
    className: "ph-1 text-xl mt-10"
  }, "Form"), /* @__PURE__ */ React.createElement("ul", null, formComponents.map((c, i) => /* @__PURE__ */ React.createElement("li", {
    key: i,
    className: "text-primary hover:text-primary-800"
  }, /* @__PURE__ */ React.createElement(Link, {
    to: c.link
  }, c.name)))));
};
export default Sidebar;
