import React from "../../../_snowpack/pkg/react.js";
import BaseInput from "./base.js";
export const InputText = ({
  value,
  onChange,
  errors,
  disabled,
  placeholder,
  autoFocus = false
}) => {
  return /* @__PURE__ */ React.createElement(BaseInput, {
    disabled,
    type: "text",
    value: value || "",
    placeholder,
    errors,
    autoFocus,
    onChange: (v) => v.target.value === "" ? onChange(void 0) : onChange(v.target.value)
  });
};
export default InputText;
