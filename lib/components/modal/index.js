import React from "../../../_snowpack/pkg/react.js";
export default (props) => {
  const {open, children} = props;
  return /* @__PURE__ */ React.createElement("div", {
    className: `fixed inset-0 w-full h-full z-20 bg-black bg-opacity-50 duration-300 overflow-y-auto ${!open && "hidden"}`
  }, /* @__PURE__ */ React.createElement("div", {
    className: "relative sm:w-3/4 w-1/2 lg:w-1/3 mx-2 sm:mx-auto my-10 opacity-100"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "relative bg-white shadow-lg rounded-lg text-gray-900 z-20 p-3"
  }, children)));
};
