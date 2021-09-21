import React from "../../../../_snowpack/pkg/react.js";
import {getValue} from "./utils.js";
const Select = ({
  value,
  onChange = (v) => console.log(`onChange not yet implemented, selected value: ${v}`),
  options,
  disabled,
  className = `cursor-pointer font-extralight  border rounded 
  w-full px-3 py-1 pb-2 pr-2 focus focus:border-sky-500  dark:bg-coolGray-700  
  focus:outline-none active:outline-none active:border-primary
  transition ease-in-out duration-200
  `
}) => {
  const selectedValue = options.find((x) => x.id === value);
  const selectedId = selectedValue && selectedValue.id;
  return /* @__PURE__ */ React.createElement("select", {
    disabled,
    className: `${className}`,
    onChange: (v) => onChange(getValue(v.target.value)),
    defaultValue: selectedId
  }, /* @__PURE__ */ React.createElement("option", {
    value: ""
  }, "-"), options.map((option, i) => /* @__PURE__ */ React.createElement("option", {
    key: i,
    value: option.id
  }, option.name)));
};
export default Select;
