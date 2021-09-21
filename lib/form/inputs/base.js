import React from "../../../_snowpack/pkg/react.js";
export default ({
  value,
  errors,
  onChange,
  onClick,
  disabled,
  placeholder,
  type = "text",
  autoFocus = false
}) => {
  return /* @__PURE__ */ React.createElement("input", {
    className: `cursor-pointer font-extralight  border rounded 
        w-full px-3 py-1 pb-2 pr-2 focus focus:border-sky-500  dark:bg-coolGray-700  
        focus:outline-none active:outline-none active:border-primary
        transition ease-in-out duration-200
        ${errors && errors.length > 0 ? "border-rose-500" : "border-coolGray-200 "}
        `,
    onChange,
    onClick,
    value,
    disabled,
    placeholder,
    type,
    autoFocus
  });
};
