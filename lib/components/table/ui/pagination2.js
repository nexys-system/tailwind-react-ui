import React from "../../../../_snowpack/pkg/react.js";
import {
  DoubleChevronLeft as ChevronLeftIcon,
  DoubleChevronLeft as ChevronRightIcon
} from "../../../icons/index.js";
export default function Example() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex-1 flex justify-between sm:hidden"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "#",
    className: "relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
  }, "Previous"), /* @__PURE__ */ React.createElement("a", {
    href: "#",
    className: "ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
  }, "Next")), /* @__PURE__ */ React.createElement("div", {
    className: "hidden sm:flex-1 sm:flex sm:items-center sm:justify-between"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("p", {
    className: "text-sm text-gray-700"
  }, "Showing ", /* @__PURE__ */ React.createElement("span", {
    className: "font-medium"
  }, "1"), " to", " ", /* @__PURE__ */ React.createElement("span", {
    className: "font-medium"
  }, "10"), " of", " ", /* @__PURE__ */ React.createElement("span", {
    className: "font-medium"
  }, "97"), " results")), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("nav", {
    className: "relative z-0 inline-flex rounded-md shadow-sm -space-x-px",
    "aria-label": "Pagination"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "#",
    className: "relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "sr-only"
  }, "Previous"), /* @__PURE__ */ React.createElement(ChevronLeftIcon, {
    className: "h-5 w-5",
    "aria-hidden": "true"
  })), /* @__PURE__ */ React.createElement("a", {
    href: "#",
    "aria-current": "page",
    className: "z-10 bg-indigo-50 border-indigo-500 text-indigo-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
  }, "1"), /* @__PURE__ */ React.createElement("a", {
    href: "#",
    className: "bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
  }, "2"), /* @__PURE__ */ React.createElement("a", {
    href: "#",
    className: "bg-white border-gray-300 text-gray-500 hover:bg-gray-50 hidden md:inline-flex relative items-center px-4 py-2 border text-sm font-medium"
  }, "3"), /* @__PURE__ */ React.createElement("span", {
    className: "relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700"
  }, "..."), /* @__PURE__ */ React.createElement("a", {
    href: "#",
    className: "bg-white border-gray-300 text-gray-500 hover:bg-gray-50 hidden md:inline-flex relative items-center px-4 py-2 border text-sm font-medium"
  }, "8"), /* @__PURE__ */ React.createElement("a", {
    href: "#",
    className: "bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
  }, "9"), /* @__PURE__ */ React.createElement("a", {
    href: "#",
    className: "bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
  }, "10"), /* @__PURE__ */ React.createElement("a", {
    href: "#",
    className: "relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "sr-only"
  }, "Next"), /* @__PURE__ */ React.createElement(ChevronRightIcon, {
    className: "h-5 w-5",
    "aria-hidden": "true"
  }))))));
}
