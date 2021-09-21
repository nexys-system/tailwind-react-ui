import React from "../../_snowpack/pkg/react.js";
const Card = ({
  children,
  title,
  style,
  className
}) => {
  return /* @__PURE__ */ React.createElement("div", {
    style,
    className: `w-full bg-white dark:bg-coolGray-600 dark:text-white rounded-xl shadow-md ${className}`
  }, /* @__PURE__ */ React.createElement("div", {
    className: ""
  }, /* @__PURE__ */ React.createElement("div", {
    className: "p-8"
  }, title && /* @__PURE__ */ React.createElement("div", {
    className: "uppercase tracking-wide text-sm text-primary font-semibold"
  }, title), children)));
};
export default Card;
