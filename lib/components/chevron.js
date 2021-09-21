import React from "../../_snowpack/pkg/react.js";
import {ChevronDown} from "../icons/index.js";
export default (props) => {
  const {up, initAngle = 0, endAngle = 180} = props;
  const rotateFrom = initAngle > 0 ? `rotate-${initAngle}` : `-rotate-${initAngle * -1}`;
  const rotateTo = endAngle > 0 ? `rotate-${endAngle}` : `-rotate-${endAngle * -1}`;
  return /* @__PURE__ */ React.createElement("span", null, /* @__PURE__ */ React.createElement(ChevronDown, {
    className: `transition duration-500 ease-in-out transform ${up ? rotateTo : rotateFrom}`
  }));
};
