import React from "../../../../_snowpack/pkg/react.js";
const typeToTypeUI = (type) => {
  if (type === "number") {
    return "text";
  }
  return type;
};
export const InputGeneric = ({
  value,
  onChange,
  errors,
  disabled,
  placeholder,
  type
}) => {
  const classArray = [
    "px-3",
    "py-2",
    "border",
    "rounded-md",
    "shadow-sm",
    "focus:ring-indigo-500",
    "focus:border-indigo-500",
    "block w-full",
    "sm:text-sm border-gray-300",
    "rounded-md"
  ];
  if (errors && errors.length > 0) {
    classArray.push("border-red-500");
    classArray.push("mb-3");
  }
  const handleChange = (v) => {
    const {value: value2} = v.target;
    if (value2 === "") {
      return onChange(void 0);
    }
    if (type === "number") {
      const nValue = Number(value2);
      if (isNaN(nValue)) {
        return onChange(void 0);
      }
      return onChange(nValue);
    }
    return onChange(value2);
  };
  return /* @__PURE__ */ React.createElement("input", {
    className: classArray.join(" "),
    placeholder,
    disabled,
    type: typeToTypeUI(type),
    value: value || "",
    onChange: handleChange
  });
};
export default InputGeneric;
