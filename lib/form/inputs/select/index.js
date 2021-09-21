import React, {useState} from "../../../../_snowpack/pkg/react.js";
import Chevron from "../../../components/chevron.js";
import BaseInput from "../base.js";
import Menu from "./menu.js";
const getValue = (v) => {
  if (v === "" || v === void 0) {
    return void 0;
  }
  const vn = Number(v);
  if (isNaN(vn)) {
    return v;
  }
  return vn;
};
const getDisplayedValue = (v, options) => {
  if (typeof v === "object" && "id" in v) {
    return options.find((o) => o.id === v.id)?.name || "";
  }
  return options.find((o) => o.id === v)?.name || "";
};
export const Select = ({
  options,
  value,
  onChange = (v) => console.log(`onChange not yet implemented, selected value: ${v}`),
  errors,
  disabled
}) => {
  const [open, setOpen] = useState(false);
  const displayValue = getDisplayedValue(value, options);
  return /* @__PURE__ */ React.createElement("div", {
    className: "relative"
  }, /* @__PURE__ */ React.createElement(BaseInput, {
    onChange: () => {
    },
    onClick: () => setOpen(!open),
    value: displayValue,
    disabled,
    errors
  }), /* @__PURE__ */ React.createElement("span", {
    className: "absolute right-3 top-2"
  }, /* @__PURE__ */ React.createElement(Chevron, {
    up: !open
  })), /* @__PURE__ */ React.createElement(Menu, {
    onCancel: () => setOpen(false),
    enableSearch: options.length > 20,
    open,
    options,
    onSelect: (v) => {
      setOpen(false);
      onChange(getValue(v));
    }
  }));
};
export default Select;
