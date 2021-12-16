import React from "react";
import { SelectOptionSetProps } from "@nexys/react-bootstrap/dist/headless/form/type";

import Select from "./index";

export default <A extends string | number>({
  options,
  onChange,
  disabled,
  value,
}: SelectOptionSetProps<A>) => {
  const handleChange = (v: A | undefined) => {
    const vOptionSet = options.find((x) => x.id === v);

    if (vOptionSet) {
      onChange(vOptionSet);
    }
  };
  return (
    <Select<A>
      onChange={handleChange}
      disabled={disabled}
      options={options}
      value={value?.id}
    />
  );
};
