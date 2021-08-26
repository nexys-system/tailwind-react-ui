import React, { useState } from "react";
import * as T from "../../type";

import Menu from "./menu";
import BaseInput from "../base";

type Value = { id: number | string; name: string };

export const Select = <A extends Value>({
  value,
  onChange = (v) =>
    console.log(`onChange not yet implemented, selected value: ${v}`),
  errors,
  disabled,
  placeholder,
  searchFunc,
}: {} & T.AutocompleteProps<A>) => {
  const [open, setOpen] = useState<boolean>(false);
  const [options, setOptions] = useState<Value[] | null>(null);
  const [displayValue, setDisplayValue] = useState<string>(value?.name || "");

  const handleSearch = (e: any) => {
    const v = e.currentTarget.value;
    setDisplayValue(v);
    if (v.length >= 3) {
      searchFunc(v).then((o) => {
        setOptions(o);
        setOpen(true);
      });
    }
  };

  return (
    <div className="relative">
      <BaseInput
        onChange={handleSearch}
        onClick={() => setOpen(!open)}
        value={displayValue}
        disabled={disabled}
        placeholder={placeholder}
        errors={errors}
      />
      {options && (
        <Menu
          onCancel={() => {
            setOptions(null);
            setOpen(false);
          }}
          open={open}
          options={options}
          onSelect={(v) => {
            setDisplayValue(v.name);
            setOptions(null);
            setOpen(false);
            onChange(v);
          }}
        />
      )}
    </div>
  );
};

export default Select;
