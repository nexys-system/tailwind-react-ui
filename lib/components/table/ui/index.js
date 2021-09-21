import React from "../../../../_snowpack/pkg/react.js";
import {
  ChevronUp,
  ChevronDown,
  Selector as SortDefault
} from "../../../icons/index.js";
import * as UIType from "../../../../_snowpack/pkg/@nexys/core-list.js";
import LoaderMain from "../../loader/main.js";
import Layout from "./layout.js";
import InputText from "../../../form/inputs/text.js";
export {Layout};
export const Loader = () => /* @__PURE__ */ React.createElement(LoaderMain, null);
const {paginationBoundaries} = UIType.PaginationUtils;
const Alert = ({
  children
}) => /* @__PURE__ */ React.createElement("div", {
  className: "alert"
}, children);
export const GlobalSearch = ({onChange, filters}) => /* @__PURE__ */ React.createElement(InputText, {
  value: filters && filters["globalSearch"],
  placeholder: "search",
  onChange: (value) => onChange({name: "globalSearch", value: value || ""})
});
export const PopoverFilter = () => /* @__PURE__ */ React.createElement(React.Fragment, null);
export const FilterUnit = () => /* @__PURE__ */ React.createElement(React.Fragment, null);
export const NoRow = (props) => {
  if (props.n > 0) {
    return null;
  }
  return /* @__PURE__ */ React.createElement(Alert, {
    type: "warning"
  }, "No rows found");
};
export const PaginationWrapper = (props) => {
  return /* @__PURE__ */ React.createElement("nav", null, /* @__PURE__ */ React.createElement("ul", {
    className: "pagination"
  }, props.children));
};
export const PaginationUnit = (props) => {
  const {isActive, isDisabled, children, onClick} = props;
  if (isDisabled) {
    return null;
  }
  const className = "page-item" + (isActive ? " active" : "") + (isDisabled ? " disabled" : "");
  return /* @__PURE__ */ React.createElement("li", {
    className
  }, /* @__PURE__ */ React.createElement("button", {
    className: "page-link",
    onClick
  }, children));
};
export const ColCell = (props) => {
  const {children, colSpan, style} = props;
  return /* @__PURE__ */ React.createElement("td", {
    className: "px-6 py-4 whitespace-nowrap",
    colSpan,
    style
  }, children);
};
export const HeaderUnit = (props) => {
  const {children} = props;
  return /* @__PURE__ */ React.createElement("th", {
    scope: "col",
    className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
  }, children);
};
export const OrderControllerUpAndDown = (props) => {
  return /* @__PURE__ */ React.createElement("span", null, /* @__PURE__ */ React.createElement("span", {
    key: "asc",
    onClick: () => props.onClick(true)
  }, /* @__PURE__ */ React.createElement(ChevronUp, null)), /* @__PURE__ */ React.createElement("span", {
    key: "desc",
    onClick: () => props.onClick(false)
  }, /* @__PURE__ */ React.createElement(ChevronDown, null)));
};
export const OrderController = (props) => {
  const {onClick, descAsc} = props;
  let Icon = SortDefault;
  if (descAsc !== null) {
    Icon = descAsc ? ChevronUp : ChevronDown;
  }
  return /* @__PURE__ */ React.createElement("div", {
    style: {
      cursor: "pointer",
      display: "inline-block",
      color: descAsc === null ? "#ccc" : "#000"
    },
    onClick: () => onClick(null)
  }, /* @__PURE__ */ React.createElement(Icon, null));
};
export const ListWrapper = ({children}) => /* @__PURE__ */ React.createElement("div", {
  className: "table-responsive-sm"
}, children);
export const ListContainer = ({
  children,
  maxHeight,
  stickyHeader = false
}) => /* @__PURE__ */ React.createElement("div", {
  className: "container",
  style: maxHeight ? {maxHeight} : void 0
}, /* @__PURE__ */ React.createElement("table", {
  className: "min-w-full divide-y divide-gray-200"
}, children));
export const Row = ({children}) => /* @__PURE__ */ React.createElement("tr", null, children);
export const ListHeader = ({children}) => /* @__PURE__ */ React.createElement("thead", {
  className: "bg-gray-50"
}, children);
export const ListBody = ({children}) => /* @__PURE__ */ React.createElement("tbody", {
  className: "bg-white divide-y divide-gray-200"
}, children);
export const RecordInfo = (props) => {
  const {nPerPage, idx, n} = props;
  if (n === 0) {
    return null;
  }
  const {start, end} = paginationBoundaries(idx, nPerPage);
  const to = Number(start) + Number(nPerPage) > n ? n : end;
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("p", {
    className: "text-sm text-gray-700"
  }, "Showing ", /* @__PURE__ */ React.createElement("span", {
    className: "font-medium"
  }, start + 1), " to", " ", /* @__PURE__ */ React.createElement("span", {
    className: "font-medium"
  }, to), " of", " ", /* @__PURE__ */ React.createElement("span", {
    className: "font-medium"
  }, n), " results"));
};
