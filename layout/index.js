import React from "../_snowpack/pkg/react.js";
import Footer from "./footer.js";
import Header from "./header.js";
import Sidebar from "./sidebar.js";
const nCols = 8;
const leftNCols = 1;
const rightNCols = nCols - leftNCols;
export default ({children}) => {
  return /* @__PURE__ */ React.createElement("div", {
    className: "d-flex flex-column font-extralight"
  }, /* @__PURE__ */ React.createElement(Header, null), /* @__PURE__ */ React.createElement("main", {
    className: "flex flex-no-wrap content-area overflow-scroll"
  }, /* @__PURE__ */ React.createElement(Sidebar, null), /* @__PURE__ */ React.createElement("div", {
    className: "container mx-auto px-4 py-4 "
  }, /* @__PURE__ */ React.createElement("div", {
    className: "grid grid-cols-8 gap-4"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "col-span-" + rightNCols
  }, children)))), /* @__PURE__ */ React.createElement(Footer, null));
};
