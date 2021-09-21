import React from "../../_snowpack/pkg/react.js";
const AHref = ({
  link,
  children,
  target
}) => /* @__PURE__ */ React.createElement("a", {
  target,
  className: "text-blue-500 hover:text-blue-800",
  href: link
}, children);
export default AHref;
