import React, { useState } from "react";
import Input from "../text";

import MenuWrapper from "../../../components/popup-menu";
import MenuItem from "./menu-item";

export default <A extends number | string | undefined>(props: {
  open: boolean;
  onSelect: (id: A) => void;
  onCancel: () => void;
  options: { id: A; name: string }[];
  enableSearch?: boolean;
}) => {
  const { open, onSelect, onCancel, enableSearch = false } = props;
  const [search, setSearch] = useState<string>("");
  const [options, setOptions] = useState<{ id: A; name: string }[]>(
    props.options
  );
  const handleSearch = (v: string | undefined) => {
    setSearch(v || "");
    setOptions(
      [...props.options].filter(
        (o) =>
          v === "" ||
          !v ||
          o.name.trim().toLowerCase().startsWith(search.trim().toLowerCase())
      )
    );
  };

  return (
    <MenuWrapper open={open} onCancel={onCancel} position="top-10 left-0">
      <>
        {enableSearch && (
          <Input
            value={search}
            autoFocus
            onChange={handleSearch}
            placeholder="Search..."
          />
        )}
        {options.map((o) => (
          <MenuItem
            {...o}
            key={o.id}
            onSelect={(v) => {
              setSearch("");
              setOptions(props.options);
              onSelect(v);
            }}
          />
        ))}
      </>
    </MenuWrapper>
  );
};
