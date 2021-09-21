import React from "../_snowpack/pkg/react.js";
import {Link} from "../_snowpack/pkg/react-router-dom.js";
import {components, formComponents} from "../links.js";
import Footer from "./footer.js";
import Header from "./header.js";
export default ({children}) => {
  return /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col h-screen justify-between"
  }, /* @__PURE__ */ React.createElement(Header, null), /* @__PURE__ */ React.createElement("main", {
    className: "flex-grow"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "container mx-auto px-4 py-4"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "grid grid-cols-8 gap-4"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h3", {
    className: "ph-1 text-xl"
  }, "Components"), /* @__PURE__ */ React.createElement("ul", null, components.map((c, i) => /* @__PURE__ */ React.createElement("li", {
    key: i,
    className: "text-blue-500 hover:text-blue-800"
  }, /* @__PURE__ */ React.createElement(Link, {
    to: c.link
  }, c.name)))), /* @__PURE__ */ React.createElement("h3", {
    className: "ph-1 text-xl"
  }, "Form"), /* @__PURE__ */ React.createElement("ul", null, formComponents.map((c, i) => /* @__PURE__ */ React.createElement("li", {
    key: i,
    className: "text-blue-500 hover:text-blue-800"
  }, /* @__PURE__ */ React.createElement(Link, {
    to: c.link
  }, c.name))))), /* @__PURE__ */ React.createElement("div", {
    className: "col-span-2"
  }, children)))), /* @__PURE__ */ React.createElement(Footer, null));
};
