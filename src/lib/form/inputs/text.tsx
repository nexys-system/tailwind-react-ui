import React from "react";
import * as T from "../type";

import BaseInput from "./base";

export const InputText = ({
  value,
  onChange,
  errors,
  disabled,
  placeholder,
  autoFocus = false,
}: T.InputProps<string>) => {
  return (
    <BaseInput
      disabled={disabled}
      type="text"
      value={value || ""}
      placeholder={placeholder}
      errors={errors}
      autoFocus={autoFocus}
      onChange={(v) =>
        v.target.value === "" ? onChange(undefined) : onChange(v.target.value)
      }
    />
  );
};

export default InputText;
