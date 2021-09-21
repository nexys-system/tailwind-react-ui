import React, {useState} from "../../../../../_snowpack/pkg/react.js";
import ChevronAnimated from "../../../../components/chevron.js";
import Menu from "./menu.js";
import {getClasses} from "../../utils.js";
export const Select = ({
  options,
  value,
  onChange = (v) => console.log(`onChange not yet implemented, selected value: ${v}`),
  errors,
  disabled
}) => {
  const [open, setOpen] = useState(false);
  const displayValue = value === void 0 ? void 0 : options.find((o) => o.id === value);
  const handleChange = (a) => {
    setOpen(false);
    if (a === void 0) {
      return;
    }
    return onChange(a);
  };
  return /* @__PURE__ */ React.createElement("div", {
    className: "relative"
  }, /* @__PURE__ */ React.createElement("input", {
    onChange: () => {
    },
    onClick: () => setOpen(!open),
    value: displayValue && displayValue.name,
    disabled,
    className: getClasses(errors)
  }), /* @__PURE__ */ React.createElement("span", {
    className: "absolute right-3 top-2"
  }, /* @__PURE__ */ React.createElement(ChevronAnimated, {
    up: !open
  })), /* @__PURE__ */ React.createElement(Menu, {
    onCancel: () => setOpen(false),
    enableSearch: options.length > 20,
    open,
    options,
    onSelect: handleChange
  }));
};
export default Select;
