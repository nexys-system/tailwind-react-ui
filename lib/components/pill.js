import React from "../../_snowpack/pkg/react.js";
export default (props) => {
  const {
    id,
    title,
    badge,
    selected,
    onSelect,
    color = "sky",
    darkColor = "coolGray",
    fullWidth = true
  } = props;
  return /* @__PURE__ */ React.createElement("div", {
    onClick: () => onSelect && id && onSelect(id),
    className: `
  cursor-pointer leading-none 
  inline-flex items-center m-1
  border border-${color}-500 dark:border-${color}-700
  ${selected ? `bg-${color}-500 dark:bg-${color}-700 text-white hover:bg-${color}-400 dark:hover:bg-${color}-600` : `bg-white dark:bg-${darkColor}-500  hover:bg-${color}-100 dark:hover:bg-${darkColor}-400`} dark:text-white
    rounded-full p-2 shadow font-extralight ${fullWidth && "w-full"}`
  }, badge && /* @__PURE__ */ React.createElement("span", {
    className: `inline-flex p-2
   ${selected ? `bg-white dark:bg-${color}-300 text-${color}-900` : `bg-${color}-500 text-white`}
   rounded-full h-8 w-8 justify-center items-center font-light`
  }, badge), /* @__PURE__ */ React.createElement("span", {
    className: "inline-flex px-2"
  }, title));
};
