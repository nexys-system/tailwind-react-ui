import React from "../../../../../_snowpack/pkg/react.js";
import {getValue} from "./utils.js";
const Select = ({
  value,
  onChange = (v) => console.log(`onChange not yet implemented, selected value: ${v}`),
  options,
  disabled,
  className = "form-select mt-1 block w-full focus:outline-none focus:shadow-outline"
}) => {
  const selectedValue = options.find((x) => x.id === value);
  const selectedId = selectedValue && selectedValue.id;
  return /* @__PURE__ */ React.createElement("select", {
    disabled,
    className,
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
