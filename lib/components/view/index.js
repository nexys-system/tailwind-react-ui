import React from "../../../_snowpack/pkg/react.js";
const View = (items) => ({data}) => /* @__PURE__ */ React.createElement("div", {
  className: "border-t border-gray-200"
}, /* @__PURE__ */ React.createElement("dl", null, items.map(([k, item], i) => {
  const bgColor = i % 2 === 0 ? "bg-gray-50" : "bg-white";
  const divClass = "px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 " + bgColor;
  return /* @__PURE__ */ React.createElement("div", {
    key: i,
    className: divClass
  }, /* @__PURE__ */ React.createElement("dt", {
    className: "text-sm font-medium text-gray-500"
  }, k), /* @__PURE__ */ React.createElement("dd", {
    className: "mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"
  }, typeof item === "function" ? item(data) : data[item]));
})));
export default View;
