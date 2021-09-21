import React, { useState } from "react";
import * as T from "../../type";
import Chevron from "../../../components/chevron";

import Menu from "./menu";
import { getClasses } from "../utils";

type Value = number | string | { id: number | string };

const getValue = <A extends Value>(
  v: number | string | undefined
): A | undefined => {
  if (v === "" || v === undefined) {
    return undefined;
  }

  const vn = Number(v);
  if (isNaN(vn)) {
    return v as A;
  }

  return vn as A;
};

const getDisplayedValue = (
  v: Value | undefined,
  options: { id: Value; name: string }[]
): string => {
  if (typeof v === "object" && "id" in v) {
    return options.find((o) => o.id === v.id)?.name || "";
  }
  return options.find((o) => o.id === v)?.name || "";
};
export const Select = <A extends Value>({
  options,
  value,
  onChange = (v) =>
    console.log(`onChange not yet implemented, selected value: ${v}`),
  errors,
  disabled,
}: {
  options: { id: number | string; name: string }[];
} & T.InputProps<A>) => {
  const [open, setOpen] = useState<boolean>(false);

  const displayValue = getDisplayedValue(value, options);

  return (
    <div className="relative">
      <input
        onChange={() => {}}
        onClick={() => setOpen(!open)}
        value={displayValue}
        disabled={disabled}
        className={getClasses(errors)}
      />
      <span className="absolute right-3 top-2">
        <Chevron up={!open} />
      </span>
      <Menu
        onCancel={() => setOpen(false)}
        enableSearch={options.length > 20}
        open={open}
        options={options}
        onSelect={(v) => {
          setOpen(false);
          onChange(getValue(v));
        }}
      />
    </div>
  );
};

export default Select;
