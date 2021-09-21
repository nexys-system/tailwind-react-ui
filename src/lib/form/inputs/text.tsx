import React from "react";
import * as T from "../type";
import { getClasses } from "./utils";

export const InputText = ({
  value,
  onChange,
  disabled,
  placeholder,
  errors,
}: T.InputProps<string>) => {
  return (
    <input
      className={getClasses(errors)}
      disabled={disabled}
      type="text"
      value={value || ""}
      placeholder={placeholder}
      onChange={(v) =>
        v.target.value === "" ? onChange(undefined) : onChange(v.target.value)
      }
    />
  );
};

export default InputText;
