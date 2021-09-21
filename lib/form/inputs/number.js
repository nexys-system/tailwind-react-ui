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
    type: "number",
    value: value || "",
    placeholder,
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
export default InputText;
