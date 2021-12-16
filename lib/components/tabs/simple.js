import React from "../../../_snowpack/pkg/react.js";
const Nav = (navs) => ({
  option = 0,
  onClick
}) => /* @__PURE__ */ React.createElement("ul", {
  id: "tabs",
  className: "inline-flex w-full px-1 pt-2 "
}, navs.map((nav, i) => {
  const classInactive = "px-4 py-2 font-semibold text-gray-800 rounded-t opacity-50";
  const classActive = "px-4 py-2 -mb-px font-semibold text-gray-800 border-b-2 border-blue-400 rounded-t opacity-50";
  return /* @__PURE__ */ React.createElement("li", {
    key: i,
    className: i === option ? classActive : classInactive
  }, /* @__PURE__ */ React.createElement("a", {
    className: "cursor-pointer",
    onClick: () => onClick(i)
  }, nav.name));
}));
export default Nav;
