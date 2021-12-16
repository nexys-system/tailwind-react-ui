import React from "../../../_snowpack/pkg/react.js";
const formClass = [
  "bg-white",
  "shadow-md",
  "rounded",
  "px-8",
  "pt-6",
  "pb-8",
  "mb-4"
];
const Card = ({
  children,
  title,
  style,
  className = formClass.join(" "),
  colSpan,
  right
}) => {
  return /* @__PURE__ */ React.createElement("div", {
    style,
    className: className + (colSpan ? " col-span-" + colSpan : "")
  }, right && /* @__PURE__ */ React.createElement("div", {
    className: "float-right pr-4 pt-4"
  }, right), /* @__PURE__ */ React.createElement("div", {
    className: "p-4"
  }), title && /* @__PURE__ */ React.createElement("div", {
    className: "uppercase tracking-wide text-sm text-primary font-semibold"
  }, title), children);
};
export default Card;
