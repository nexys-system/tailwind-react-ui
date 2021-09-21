import React, { useState } from "react";
import * as T from "../../../type";
import ChevronAnimated from "../../../../components/chevron";

import Menu from "./menu";
import { getClasses } from "../../utils";

export const Select = <A,>({
  options,
  value,
  onChange = (v) =>
    console.log(`onChange not yet implemented, selected value: ${v}`),
  errors,
  disabled,
}: T.SelectProps<A>) => {
  const [open, setOpen] = useState<boolean>(false);

  const displayValue =
    value === undefined ? undefined : options.find((o) => o.id === value);

  const handleChange = (a: A | undefined) => {
    setOpen(false);

    if (a === undefined) {
      return;
    }
    return onChange(a);
  };

  return (
    <div className="relative">
      <input
        onChange={() => {}}
        onClick={() => setOpen(!open)}
        value={displayValue && displayValue.name}
        disabled={disabled}
        className={getClasses(errors)}
      />
      <span className="absolute right-3 top-2">
        <ChevronAnimated up={!open} />
      </span>
      <Menu
        onCancel={() => setOpen(false)}
        enableSearch={options.length > 20}
        open={open}
        options={options}
        onSelect={handleChange}
      />
    </div>
  );
};

export default Select;
