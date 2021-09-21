import React, {useState} from "../../../../_snowpack/pkg/react.js";
import Menu from "./menu.js";
import BaseInput from "../base.js";
export const Select = ({
  value,
  onChange = (v) => console.log(`onChange not yet implemented, selected value: ${v}`),
  errors,
  disabled,
  placeholder,
  searchFunc
}) => {
  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState(null);
  const [displayValue, setDisplayValue] = useState(value?.name || "");
  const handleSearch = (e) => {
    const v = e.currentTarget.value;
    setDisplayValue(v);
    if (v.length >= 3) {
      searchFunc(v).then((o) => {
        setOptions(o);
        setOpen(true);
      });
    }
  };
  return /* @__PURE__ */ React.createElement("div", {
    className: "relative"
  }, /* @__PURE__ */ React.createElement(BaseInput, {
    onChange: handleSearch,
    onClick: () => setOpen(!open),
    value: displayValue,
    disabled,
    placeholder,
    errors
  }), options && /* @__PURE__ */ React.createElement(Menu, {
    onCancel: () => {
      setOptions(null);
      setOpen(false);
    },
    open,
    options,
    onSelect: (v) => {
      setDisplayValue(v.name);
      setOptions(null);
      setOpen(false);
      onChange(v);
    }
  }));
};
export default Select;
