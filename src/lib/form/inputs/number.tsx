import React from "react";
import * as T from "../type";
import BaseInput from "./base";

export const InputNumber = ({
  value,
  onChange,
  errors,
  disabled,
  placeholder,
  autoFocus = false,
}: T.InputProps<number | undefined>) => {
  return (
    <BaseInput
      disabled={disabled}
      type="number"
      value={value || undefined}
      placeholder={placeholder}
      errors={errors}
      autoFocus={autoFocus}
      onChange={(v) =>
        v.target.value === ""
          ? onChange(undefined)
          : onChange(Number(v.target.value))
      }
    />
  );
};
// ({
//   value,
//   onChange,
//   errors,
//   disabled
// }: T.InputProps<number | undefined>) => (
//   <input
//     className={
//       'form-control' + (errors && errors.length > 0 ? '  is-invalid' : '')
//     }
//     disabled={disabled}
//     type="number"
//     value={value || ''}
//     onChange={v =>
//       v.target.value === ''
//         ? onChange(undefined)
//         : onChange(Number(v.target.value))
//     }
//   />
// );

export default InputNumber;
