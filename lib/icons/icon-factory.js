import React from "../../_snowpack/pkg/react.js";
import Wrapper from "./svg-wrapper.js";
const IconFactorySVG = (d, strokeWidth = 1, strokeLinecap = "round", strokeLinejoin = "round") => ({className, svgProps}) => {
  const paths = typeof d === "string" ? [d] : d;
  return /* @__PURE__ */ React.createElement(Wrapper, {
    className
  }, paths.map((d2, i) => /* @__PURE__ */ React.createElement("path", {
    key: i,
    strokeLinecap,
    strokeLinejoin,
    strokeWidth,
    ...svgProps,
    d: d2
  })));
};
export default IconFactorySVG;
