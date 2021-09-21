import React from "../../../_snowpack/pkg/react.js";
import {getClasses} from "./utils.js";
export const InputText = ({
  value,
  onChange,
  disabled,
  placeholder,
  errors
}) => {
  return /* @__PURE__ */ React.createElement("input", {
    className: getClasses(errors),
    disabled,
    type: "text",
    value: value || "",
    placeholder,
    onChange: (v) => v.target.value === "" ? onChange(void 0) : onChange(v.target.value)
  });
};
export default InputText;
