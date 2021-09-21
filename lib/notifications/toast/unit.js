import React, {useEffect} from "../../../_snowpack/pkg/react.js";
import {Close} from "../../icons/index.js";
import {mapTypeToColor} from "../utils.js";
const ToastUnit = ({
  idx,
  title,
  timestring,
  messageType,
  content,
  onDismiss
}) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      onDismiss(idx);
    }, 5e3);
    return () => {
      clearTimeout(timeout);
    };
  }, [idx]);
  return /* @__PURE__ */ React.createElement("div", {
    className: `w-full bg-white dark:bg-coolGray-700 dark:text-white shadow-md dark:shadow-white px-5 py-3 my-3 border-l-4 border-${mapTypeToColor(messageType)}-500 font-extralight`,
    role: "alert",
    "aria-live": "assertive",
    "aria-atomic": "true",
    style: {opacity: 1, animation: "0.2s ease-in-out slideInFromLeft"}
  }, /* @__PURE__ */ React.createElement("style", null, `
           @keyframes slideInFromLeft {
            0% {
              transform: translateX(-100%);
            }
            100% {
              transform: translateX(0);
            }
          }
        `), /* @__PURE__ */ React.createElement("div", {
    className: ""
  }, /* @__PURE__ */ React.createElement("strong", null, title), /* @__PURE__ */ React.createElement("small", {
    className: "text-muted"
  }, timestring), /* @__PURE__ */ React.createElement("button", {
    type: "button",
    className: "float-right",
    "data-dismiss": "toast",
    "aria-label": "Close",
    onClick: () => onDismiss(idx)
  }, /* @__PURE__ */ React.createElement("span", {
    "aria-hidden": "true"
  }, /* @__PURE__ */ React.createElement(Close, null), " "))), /* @__PURE__ */ React.createElement("div", null, content));
};
export default ToastUnit;
