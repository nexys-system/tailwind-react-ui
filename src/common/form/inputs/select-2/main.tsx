import React from "react";
import * as T from "../../type";
import { getValue } from "./utils";

const Select = <A extends string | number>({
  value,
  onChange = (v) =>
    console.log(`onChange not yet implemented, selected value: ${v}`),
  options,
  disabled,
  className = `cursor-pointer font-extralight  border rounded 
  w-full px-3 py-1 pb-2 pr-2 focus focus:border-sky-500  dark:bg-coolGray-700  
  focus:outline-none active:outline-none active:border-primary
  transition ease-in-out duration-200
  `,
}: T.SelectProps<A> & { className?: string }) => {
  const selectedValue = options.find((x) => x.id === value);
  const selectedId: A | undefined = selectedValue && selectedValue.id;

  /**
   *  ${
        errors && errors.length > 0
          ? "border-rose-500"
          : "border-coolGray-200 "
      }
   */
  return (
    <select
      disabled={disabled}
      className={`${className}`}
      onChange={(v) => onChange(getValue(v.target.value))}
      defaultValue={selectedId}
    >
      <option value={""}>-</option>
      {options.map((option, i) => (
        <option key={i} value={option.id}>
          {option.name}
        </option>
      ))}
    </select>
  );
};

export default Select;
