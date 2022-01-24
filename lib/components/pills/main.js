import React from "../../../_snowpack/pkg/react.js";
import {getPillClasses} from "./classes.js";
import {ContextColor} from "../type.js";
export default (props) => {
  const {
    id,
    title,
    badge,
    selected,
    onSelect,
    color = ContextColor.primary,
    fullWidth = true,
    rounded
  } = props;
  return /* @__PURE__ */ React.createElement("div", {
    onClick: () => onSelect && id && onSelect(id),
    className: getPillClasses({color, rounded}, selected, fullWidth).join(" ")
  }, badge && /* @__PURE__ */ React.createElement("span", {
    className: `inline-flex p-2
   ${selected ? `bg-white dark:bg-${color}-300 text-${color}-900` : `bg-${color}-500 text-white`} 
    rounded-full h-8 w-8 justify-center items-center font-light`
  }, badge), /* @__PURE__ */ React.createElement("span", {
    className: "inline-flex px-2"
  }, title));
};
