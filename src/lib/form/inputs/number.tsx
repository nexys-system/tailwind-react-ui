import React from "react";
import * as T from "../type";

import BaseInput from "./base";

export const InputNumber = ({
  value,
  onChange,
  errors,
  disabled,
  placeholder,
  autoFocus,
}: T.InputProps<number | undefined>) => {
  return (
    <BaseInput
      disabled={disabled}
      type="text"
      value={value || ""}
      placeholder={placeholder}
      errors={errors}
      autoFocus={autoFocus}
      onChange={(v) => {
        if (v.target.value === "") {
          return onChange(undefined);
        }

        const n = Number(v.target.value);

        if (isNaN(n)) {
          return onChange(undefined);
        }
        onChange(n);
      }}
    />
  );
};

export default InputNumber;
