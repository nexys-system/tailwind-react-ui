import React from "../../../_snowpack/pkg/react.js";
import {Link} from "../../../_snowpack/pkg/react-router-dom.js";
const classes = [
  `text-primary`,
  `hover:text-primary-400`,
  `cursor-pointer`,
  `transition`,
  `ease-in-out`,
  `duration-200`
];
export const Internal = ({url, children, inline = true}) => {
  return /* @__PURE__ */ React.createElement(Link, {
    to: url,
    className: classes.join(" "),
    target: inline ? void 0 : "_blank",
    rel: inline ? void 0 : "noopener noreferrer"
  }, children || url);
};
export const External = ({url, children, inline = false}) => {
  return /* @__PURE__ */ React.createElement("a", {
    href: url,
    className: classes.join(" "),
    target: inline ? void 0 : "_blank",
    rel: inline ? void 0 : "noopener noreferrer"
  }, children || url);
};
