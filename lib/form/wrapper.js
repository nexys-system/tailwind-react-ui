import React from "../../_snowpack/pkg/react.js";
export const Wrapper = ({
  label,
  info,
  children,
  errors,
  inputType = "default"
}) => {
  return /* @__PURE__ */ React.createElement("div", {
    className: `controls my-3 `
  }, /* @__PURE__ */ React.createElement("div", {
    className: `${inputType === "switch" && "flex"}`
  }, /* @__PURE__ */ React.createElement("label", {
    className: `control-label dark:text-white font-extralight ${inputType === "switch" && "mr-5"}`
  }, label), children), /* @__PURE__ */ React.createElement("small", {
    className: "form-text text-muted"
  }, info), errors && Array.isArray(errors) && /* @__PURE__ */ React.createElement("div", {
    className: "text-rose-500 font-extralight"
  }, /* @__PURE__ */ React.createElement("ul", {
    className: "list list-unstyled"
  }, errors.map((e, i) => /* @__PURE__ */ React.createElement("li", {
    key: i
  }, e)))));
};
export const Wrapper2 = ({
  label,
  children
}) => /* @__PURE__ */ React.createElement("div", {
  className: "controls"
}, label && /* @__PURE__ */ React.createElement("label", {
  className: "mr-sm-2"
}, label), children);
export default Wrapper;
