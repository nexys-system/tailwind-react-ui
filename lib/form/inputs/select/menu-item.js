import React from "../../../../_snowpack/pkg/react.js";
export default (props) => {
  const {id, name, icon, onSelect} = props;
  return /* @__PURE__ */ React.createElement("li", {
    onClick: () => onSelect(id),
    className: `flex flex-cols dark:hover:bg-coolGray-500 hover:bg-sky-100 py-2 px-4 block whitespace-no-wrap font-extralight dark:text-white`
  }, /* @__PURE__ */ React.createElement("span", {
    className: "text-sky-500"
  }, icon), /* @__PURE__ */ React.createElement("span", {
    className: "mr-3"
  }), name);
};
