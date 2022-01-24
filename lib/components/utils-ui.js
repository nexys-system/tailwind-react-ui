import React from "../../_snowpack/pkg/react.js";
import {Link} from "../../_snowpack/pkg/react-router-dom.js";
import {ArrowCircleRight, PlusCircle, ArrowCircleLeft} from "../icons/index.js";
const LinkBtn = ({
  link,
  children
}) => /* @__PURE__ */ React.createElement(Link, {
  className: "float-right text-primary hover:text-primary-400",
  to: link
}, children);
export const LinkAdd = ({link}) => /* @__PURE__ */ React.createElement(LinkBtn, {
  link
}, /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(PlusCircle, {
  className: "mb-1"
}), " Add"));
export const LinkBack = ({link}) => /* @__PURE__ */ React.createElement(LinkBtn, {
  link
}, /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(ArrowCircleLeft, {
  className: "mb-1"
}), " Back"));
export const EditBtn = ({link}) => /* @__PURE__ */ React.createElement(Link, {
  to: link,
  className: "text-primary hover:text-primary-400"
}, /* @__PURE__ */ React.createElement(ArrowCircleRight, null));
