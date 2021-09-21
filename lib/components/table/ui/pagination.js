import React from "../../../../_snowpack/pkg/react.js";
import * as CoreList from "../../../../_snowpack/pkg/@nexys/core-list.js";
import {
  DoubleChevronLeft as ChevronLeftIcon,
  DoubleChevronRight as ChevronRightIcon
} from "../../../icons/index.js";
const {getPagination} = CoreList.PaginationUtils;
const classPreviousNext = [
  "cursor-pointer",
  "relative",
  "inline-flex",
  "items-center",
  "px-2",
  "py-2",
  "rounded-l-md",
  "border",
  "border-gray-300",
  "bg-white",
  "text-sm",
  "font-medium",
  "text-gray-500",
  "hover:bg-gray-50"
].join(" ");
const classPageInactive = [
  "cursor-pointer",
  "relative",
  "inline-flex",
  "items-center",
  "px-4",
  "py-2",
  "bg-white",
  "border-gray-300",
  "text-gray-500",
  "border",
  "text-sm",
  "font-medium",
  "hover:bg-gray-50"
].join(" ");
const Pagination = ({
  n,
  nPerPage,
  idx,
  onClick
}) => {
  if (n === 0) {
    return null;
  }
  const {nPage} = getPagination(n, nPerPage);
  const classActive = "z-10 bg-indigo-50 border-indigo-500 text-indigo-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium";
  const pages = new Array(nPage).fill(1).map((_x, i) => i + 1);
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("nav", {
    className: "relative z-0 inline-flex rounded-md shadow-sm -space-x-px",
    "aria-label": "Pagination"
  }, /* @__PURE__ */ React.createElement("a", {
    onClick: idx > 1 ? () => onClick(idx - 1) : void 0,
    className: classPreviousNext
  }, /* @__PURE__ */ React.createElement("span", {
    className: "sr-only"
  }, "Previous"), /* @__PURE__ */ React.createElement(ChevronLeftIcon, {
    className: "h-5 w-5",
    "aria-hidden": "true"
  })), pages.map((page, i) => {
    if (page === null) {
      return /* @__PURE__ */ React.createElement("a", {
        key: i,
        href: "#",
        "aria-current": "page",
        className: classPageInactive
      }, "...");
    }
    return /* @__PURE__ */ React.createElement("a", {
      key: i,
      onClick: () => onClick(page),
      "aria-current": "page",
      className: idx === page ? classActive : classPageInactive
    }, page);
  }), /* @__PURE__ */ React.createElement("a", {
    onClick: idx < nPage ? () => onClick(idx + 1) : void 0,
    className: "cursor-pointer relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "sr-only"
  }, "Next"), /* @__PURE__ */ React.createElement(ChevronRightIcon, {
    className: "h-5 w-5",
    "aria-hidden": "true"
  }))));
};
export default Pagination;
