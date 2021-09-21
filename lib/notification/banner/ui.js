import React from "../../../_snowpack/pkg/react.js";
import {
  Close as CloseIcon,
  Speakerphone as SpeakerphoneIcon
} from "../../icons/index.js";
export default ({
  label,
  link,
  onDismiss = () => alert("initialize onDismiss event"),
  Icon = () => /* @__PURE__ */ React.createElement(SpeakerphoneIcon, null),
  isHtml,
  color = "sky"
}) => {
  return /* @__PURE__ */ React.createElement("div", {
    className: `bg-${color}-500`
  }, /* @__PURE__ */ React.createElement("div", {
    className: "max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex items-center justify-between flex-wrap"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "w-full flex-1 flex "
  }, /* @__PURE__ */ React.createElement("span", {
    className: "flex rounded-lg p-2"
  }, /* @__PURE__ */ React.createElement(Icon, null)), isHtml ? /* @__PURE__ */ React.createElement("div", {
    dangerouslySetInnerHTML: {__html: label},
    className: "text-white font-extralight"
  }) : /* @__PURE__ */ React.createElement("p", {
    className: "ml-3 font-medium text-white truncate"
  }, label)), /* @__PURE__ */ React.createElement("div", {
    className: "order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto"
  }, link && /* @__PURE__ */ React.createElement("a", {
    href: link.src,
    className: "flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-indigo-600 bg-white hover:bg-indigo-50"
  }, link.label)), /* @__PURE__ */ React.createElement("div", {
    className: "w-full"
  }, /* @__PURE__ */ React.createElement("button", {
    onClick: onDismiss,
    type: "button",
    className: "-mr-1 flex p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2 float-right"
  }, /* @__PURE__ */ React.createElement(CloseIcon, {
    className: "text-white"
  }), /* @__PURE__ */ React.createElement("span", {
    className: "hidden md:inline text-white font-extralight"
  }, "Dismiss"))))));
};
