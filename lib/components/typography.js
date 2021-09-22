import React from "../../_snowpack/pkg/react.js";
const getComponent = (variant) => {
  switch (variant) {
    case "h1":
      return ({children}) => /* @__PURE__ */ React.createElement("h1", {
        className: "text-primary-500 text-3xl px-2"
      }, children);
    case "h2":
      return ({children}) => /* @__PURE__ */ React.createElement("h2", {
        className: "text-primary-500 text-2xl px-2"
      }, children);
    case "h3":
      return ({children}) => /* @__PURE__ */ React.createElement("h3", {
        className: "text-primary-500 text-xl px-2"
      }, children);
    case "h4":
      return ({children}) => /* @__PURE__ */ React.createElement("h4", {
        className: "text-primary-500 text-lg px-2"
      }, children);
    case "h5":
      return ({children}) => /* @__PURE__ */ React.createElement("h5", {
        className: "text-primary-500"
      }, children);
    case "h6":
      return ({children}) => /* @__PURE__ */ React.createElement("h6", {
        className: "text-primary-500"
      }, children);
    case "body":
      return ({children}) => /* @__PURE__ */ React.createElement("p", null, children);
  }
};
const Typography = ({
  variant = "body",
  children
}) => {
  const C = getComponent(variant);
  return /* @__PURE__ */ React.createElement(C, null, children);
};
export default Typography;
