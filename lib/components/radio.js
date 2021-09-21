import React from "../../_snowpack/pkg/react.js";
export default ({
  checked,
  onChange,
  label,
  id,
  disabled = false
}) => {
  const classes = [
    `w-4 h-4 inline-block mr-2 rounded-full border border-grey flex-no-shrink`
  ];
  if (checked) {
    classes.push("shadow-md text-primary ring-1 ring-pimary");
    if (disabled) {
      classes.push("bg-coolGray-300");
    } else {
      classes.push("bg-primary");
    }
  }
  return /* @__PURE__ */ React.createElement("div", {
    className: "flex items-center mr-4 mb-4"
  }, /* @__PURE__ */ React.createElement("input", {
    id: `radio-${id}`,
    type: "radio",
    name: "radio",
    className: "hidden",
    checked,
    onChange: () => onChange(id),
    disabled
  }), /* @__PURE__ */ React.createElement("label", {
    htmlFor: `radio-${id}`,
    className: "flex items-center cursor-pointer font-extralight dark:text-white"
  }, /* @__PURE__ */ React.createElement("span", {
    className: classes.join(" ")
  }), label));
};
