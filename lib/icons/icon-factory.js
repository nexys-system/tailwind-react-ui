import React from "../../_snowpack/pkg/react.js";
import Wrapper from "./svg-wrapper.js";
const IconFactorySVG = (d, strokeWidth = 1, strokeLinecap = "round", strokeLinejoin = "round") => ({className, svgProps}) => {
  const p = typeof d === "string" ? [d] : d;
  return /* @__PURE__ */ React.createElement(Wrapper, {
    className
  }, /* @__PURE__ */ React.createElement(React.Fragment, null, p.map((i) => /* @__PURE__ */ React.createElement("path", {
    strokeLinecap,
    strokeLinejoin,
    strokeWidth,
    ...svgProps,
    d: i
  }))));
};
export default IconFactorySVG;
