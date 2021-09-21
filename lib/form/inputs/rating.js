import React from "../../../_snowpack/pkg/react.js";
import {Star} from "../../icons/index.js";
export default ({rating, onChange}) => {
  const classes = "cursor-pointer";
  const ratings = [1, 2, 3, 4, 5];
  return /* @__PURE__ */ React.createElement("span", null, ratings.map((r) => {
    const sClass = !rating || rating < r ? "text-coolGray-300 hover:text-coolGray-400" : "fill-current text-yellow-300 hover:text-yellow-400";
    return /* @__PURE__ */ React.createElement("span", {
      onClick: () => onChange && onChange(r)
    }, /* @__PURE__ */ React.createElement(Star, {
      className: `${sClass} ${classes}`
    }));
  }));
};
