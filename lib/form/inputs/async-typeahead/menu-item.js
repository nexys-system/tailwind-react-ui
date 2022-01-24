import React from "../../../../_snowpack/pkg/react.js";
export default (props) => {
  const {v, icon, onSelect} = props;
  return /* @__PURE__ */ React.createElement("li", {
    onClick: () => onSelect(v),
    className: `flex flex-cols dark:hover:bg-coolGray-500 hover:bg-primary-100 py-2 px-4 block whitespace-no-wrap font-extralight dark:text-white`
  }, /* @__PURE__ */ React.createElement("span", {
    className: "text-primary"
  }, icon), /* @__PURE__ */ React.createElement("span", {
    className: "mr-3"
  }), v.name);
};
