import React from "../../../../_snowpack/pkg/react.js";
import * as CoreList from "../../../../_snowpack/pkg/@nexys/core-list.js";
import * as Icons from "../../../icons/index.js";
const {getPagination} = CoreList.PaginationUtils;
const classesCommon = [
  "h-8",
  "w-8",
  "mr-1",
  "flex",
  "justify-center",
  "items-center",
  "rounded-full",
  "cursor-pointer"
].join(" ");
const classesInactive = ["bg-gray-50", "hover:bg-gray-100"].join(" ");
const classesActive = ["bg-primary", "text-white"].join(" ");
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
  const pages = CoreList.PaginationUtils.getPageTiles(idx, nPage);
  return /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col items-center my-6 text-extralight text-sm"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex text-gray-700"
  }, /* @__PURE__ */ React.createElement("div", {
    className: `${classesCommon} ${classesInactive}`
  }, /* @__PURE__ */ React.createElement("a", {
    onClick: idx > 1 ? () => onClick(idx - 1) : void 0
  }, /* @__PURE__ */ React.createElement(Icons.ChevronLeft, {
    className: "h-5 w-5"
  }))), /* @__PURE__ */ React.createElement("div", {
    className: "flex h-8 rounded-full bg-gray-50"
  }, pages.map((page, i) => {
    if (page < 0) {
      return /* @__PURE__ */ React.createElement("span", {
        "aria-current": "page",
        className: `${classesCommon} ${classesInactive}`
      }, "...");
    }
    return /* @__PURE__ */ React.createElement("a", {
      key: i,
      onClick: () => onClick(page),
      className: `${classesCommon} ${idx === page ? classesActive : classesInactive}`,
      "aria-current": "page"
    }, page);
  })), /* @__PURE__ */ React.createElement("div", {
    className: `${classesCommon} ${classesInactive}`
  }, /* @__PURE__ */ React.createElement("a", {
    onClick: idx < nPage ? () => onClick(idx + 1) : void 0
  }, /* @__PURE__ */ React.createElement(Icons.ChevronRight, {
    className: "h-5 w-5"
  })))));
};
export default Pagination;
