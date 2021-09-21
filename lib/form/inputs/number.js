import React from "../../../_snowpack/pkg/react.js";
import BaseInput from "./base.js";
export const InputNumber = ({
  value,
  onChange,
  errors,
  disabled,
  placeholder,
  autoFocus
}) => {
  return /* @__PURE__ */ React.createElement(BaseInput, {
    disabled,
    type: "text",
    value: value || "",
    placeholder,
    errors,
    autoFocus,
    onChange: (v) => {
      if (v.target.value === "") {
        return onChange(void 0);
      }
      const n = Number(v.target.value);
      if (isNaN(n)) {
        return onChange(void 0);
      }
      onChange(n);
    }
  });
};
export default InputNumber;
