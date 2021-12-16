import React from "../../_snowpack/pkg/react.js";
import {Link} from "../../_snowpack/pkg/react-router-dom.js";
import {ArrowCircleRight, PlusCircle, ArrowLeft} from "../icons/index.js";
const LinkBtn = ({
  link,
  children
}) => /* @__PURE__ */ React.createElement(Link, {
  className: "float-right",
  to: link
}, children);
export const LinkAdd = ({link}) => /* @__PURE__ */ React.createElement(LinkBtn, {
  link
}, /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(PlusCircle, null), " Add"));
export const LinkBack = ({link}) => /* @__PURE__ */ React.createElement(LinkBtn, {
  link
}, /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(ArrowLeft, null), " Back"));
export const EditBtn = ({link}) => /* @__PURE__ */ React.createElement(Link, {
  to: link,
  className: "text-blue-500"
}, /* @__PURE__ */ React.createElement(ArrowCircleRight, null));
