import React from "../../../_snowpack/pkg/react.js";
import {Star} from "../../icons/index.js";
const ratings = [1, 2, 3, 4, 5];
export default ({
  value: valueProps,
  onChange,
  disabled
}) => {
  const [value, setValue] = React.useState(valueProps);
  const handleChange = (v) => {
    if (disabled) {
      return;
    }
    setValue(v);
    onChange(v);
  };
  return /* @__PURE__ */ React.createElement("span", null, ratings.map((r, i) => {
    const sClass = !value || value < r ? "text-coolGray-300 hover:text-coolGray-400" : "fill-current text-yellow-300 hover:text-yellow-400";
    return /* @__PURE__ */ React.createElement("span", {
      key: i,
      onClick: () => handleChange(r)
    }, /* @__PURE__ */ React.createElement(Star, {
      className: `cursor-pointer ${sClass}`
    }));
  }));
};
