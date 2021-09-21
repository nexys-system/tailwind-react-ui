import React from "../../_snowpack/pkg/react.js";
import Wrapper from "./svg-wrapper.js";
const IconFactorySVG = (d, strokeWidth, strokeLinecap = "round", strokeLinejoin = "round") => ({
  className,
  svgProps
}) => /* @__PURE__ */ React.createElement(Wrapper, {
  className
}, /* @__PURE__ */ React.createElement("path", {
  strokeLinecap,
  strokeLinejoin,
  strokeWidth,
  ...svgProps,
  d
}));
export default IconFactorySVG;
