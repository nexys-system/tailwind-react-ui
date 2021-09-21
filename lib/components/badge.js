import React from "../../_snowpack/pkg/react.js";
const Badge = ({children, color = "blue"}) => /* @__PURE__ */ React.createElement("span", {
  className: `text-xs border rounded p-1 border-${color}-500 text-${color}-500  hover:border-${color}-800 hover:text-${color}-800`
}, children);
export default Badge;
