import React from "../../../../_snowpack/pkg/react.js";
export default ({value, onChange, disabled}) => {
  const transform = value === void 0 ? "translateX(50%)" : value === true ? void 0 : "translateX(100%)";
  const dotColor = !disabled && typeof value === "boolean" ? "bg-white" : "bg-gray-400";
  return /* @__PURE__ */ React.createElement("div", {
    className: "relative cursor-pointer focus:outline-none focus:shadow-outline",
    onClick: () => onChange(!value)
  }, /* @__PURE__ */ React.createElement("div", {
    className: "block bg-gray-600 w-14 h-8 rounded-full  focus:outline-none focus:shadow-outline"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "dot absolute left-1 top-1  w-6 h-6 rounded-full transition focus:outline-none focus:shadow-outline " + dotColor,
    style: {transform}
  }));
};
