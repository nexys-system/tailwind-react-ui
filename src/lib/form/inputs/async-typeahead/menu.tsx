import React, { useEffect, useState } from "react";

// import Input from "../text";

import MenuWrapper from "../../../components/popup-menu";
import MenuItem from "./menu-item";

type Value = { id: number | string; name: string };

export default (props: {
  open: boolean;
  onSelect: (v: Value) => void;
  onCancel: () => void;
  options: Value[];
}) => {
  const { open, onSelect, onCancel } = props;
  const [options, setOptions] = useState<Value[]>(props.options);

  useEffect(() => {
    setOptions([...props.options]);
  }, [props.options]);

  return (
    <MenuWrapper open={open} onCancel={onCancel}>
      <>
        {options.map((o) => (
          <MenuItem
            {...o}
            v={o}
            key={o.id}
            onSelect={(v) => {
              onSelect(v);
            }}
          />
        ))}
      </>
    </MenuWrapper>
  );
};
