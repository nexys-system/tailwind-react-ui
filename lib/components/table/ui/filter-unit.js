import React from "../../../../_snowpack/pkg/react.js";
import PopoverFilter from "./popover-unit.js";
import Checkbox from "../../../form/inputs/boolean/checkbox.js";
import Radio from "../../../form/inputs/radio.js";
import TextInput from "../../../form/inputs/text.js";
const FilterUnit = (props) => {
  const {filter, filters, name, onChange, onReset} = props;
  if (typeof filter === "boolean" && filter === true) {
    return /* @__PURE__ */ React.createElement(PopoverFilter, {
      isActive: filters[name],
      onReset: () => onReset(name)
    }, /* @__PURE__ */ React.createElement(TextInput, {
      value: filters[name],
      onChange: (v) => onChange({name, value: v})
    }));
  }
  if (typeof filter === "object" && filter.type === "string") {
    return /* @__PURE__ */ React.createElement(PopoverFilter, {
      isActive: filters[name],
      onReset: () => onReset(name)
    }, /* @__PURE__ */ React.createElement(TextInput, {
      value: filters[name] ? filters[name].value.value : "",
      onChange: (v) => {
        onChange({
          name,
          value: {value: v, func: filter.func}
        });
      },
      placeholder: "Type to filter..."
    }));
  }
  if (typeof filter === "object") {
    const options = filter.options && typeof filter.options === "function" ? filter.options(filters) : filter.options;
    if (filter.type === "category") {
      const v = filters[name] ? filters[name].value : [];
      return /* @__PURE__ */ React.createElement(PopoverFilter, {
        isActive: filters[name],
        onReset: () => onReset(name)
      }, options && options.map((option) => /* @__PURE__ */ React.createElement("div", {
        className: "flex flex-row"
      }, /* @__PURE__ */ React.createElement(Checkbox, {
        value: v.includes(option.key),
        onChange: () => onChange({
          name,
          value: {
            value: option.key,
            func: filter.func
          },
          type: filter.type
        })
      }), /* @__PURE__ */ React.createElement("span", {
        className: "font-extralight ml-1"
      }, option.value))));
    }
    if (filter.type === "select") {
      const value = filters[name] ? filters[name].value.value : "";
      return /* @__PURE__ */ React.createElement(PopoverFilter, {
        isActive: filters[name],
        onReset: () => onReset(name)
      }, options && options.map((option) => /* @__PURE__ */ React.createElement(Radio, {
        id: option.key,
        label: option.value,
        checked: value === option.key,
        onChange: () => onChange({
          name,
          value: {value: option.key, func: filter.func}
        })
      })));
    }
  }
  return null;
};
export default FilterUnit;
