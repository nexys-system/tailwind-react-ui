import React from "../../_snowpack/pkg/react.js";
export default (props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    className: `w-6 h-6 ${props.className} inline`,
    fill: "none",
    stroke: "currentColor",
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, props.children);
};
