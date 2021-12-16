import React from "../../../../_snowpack/pkg/react.js";
const classes1 = ["block", "text-sm", "font-medium", "text-gray-700"];
export const Wrapper = ({label, children, errors, info}) => {
  return /* @__PURE__ */ React.createElement("div", {
    className: "mb-4"
  }, /* @__PURE__ */ React.createElement("label", {
    className: classes1.join(" ")
  }, label), children, info && /* @__PURE__ */ React.createElement("p", {
    className: " text-xs "
  }, info), " ", errors && errors.map((e, i) => /* @__PURE__ */ React.createElement("p", {
    className: "text-red-500 text-xs italic",
    key: i
  }, e)));
};
export default Wrapper;
