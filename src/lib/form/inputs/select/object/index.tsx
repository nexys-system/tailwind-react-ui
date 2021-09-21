import React from "react";

import Scalar from "../scalar";
import { SelectOptionSetProps } from "../../../type";

const SelectObject = <A,>({
  options,
  value,
  onChange,
}: SelectOptionSetProps<A>) => {
  const handleChange = (v?: A) => {
    if (v === undefined) {
      return;
    }

    const f = options.find((o) => o.id === v);

    if (f) {
      onChange(f);
    }
  };

  const v = value && value.id;
  return <Scalar<A> options={options} value={v} onChange={handleChange} />;
};

export default SelectObject;
