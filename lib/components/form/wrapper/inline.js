import React from "../../../../_snowpack/pkg/react.js";
export default ({children, label}) => {
  return /* @__PURE__ */ React.createElement("div", {
    className: "md:flex md:items-center mb-6"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "md:w-1/3"
  }, /* @__PURE__ */ React.createElement("label", {
    className: "block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
  }, label)), /* @__PURE__ */ React.createElement("div", {
    className: "md:w-2/3"
  }, children));
};
