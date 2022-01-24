import React from "../../../_snowpack/pkg/react.js";
import {Clipboard, CheckCircle} from "../../icons/index.js";
var CopyState;
(function(CopyState2) {
  CopyState2[CopyState2["idle"] = 1] = "idle";
  CopyState2[CopyState2["progress"] = 2] = "progress";
  CopyState2[CopyState2["copied"] = 3] = "copied";
})(CopyState || (CopyState = {}));
export const Statement = ({
  code,
  copyToClipboard = false
}) => {
  const [copyState, setCopyState] = React.useState(1);
  const handleClick = async () => {
    setCopyState(2);
    await navigator.clipboard.writeText(code);
    setCopyState(3);
  };
  return /* @__PURE__ */ React.createElement("span", {
    onClick: copyToClipboard ? handleClick : void 0,
    className: "cursor-pointer rounded p-1 pb-1 px-3 text-sm text-gray-300 hover:text-white " + (copyState === 2 ? "bg-yellow-500" : "bg-black")
  }, /* @__PURE__ */ React.createElement("code", null, code, " "), copyToClipboard && /* @__PURE__ */ React.createElement("button", {
    disabled: copyState === 2,
    className: "border-l-2 border-gray-700 pl-2"
  }, copyState !== 3 && /* @__PURE__ */ React.createElement(Clipboard, null), copyState === 3 && /* @__PURE__ */ React.createElement(CheckCircle, {
    className: "text-green-500"
  })));
};
export const Block = ({code}) => {
  return /* @__PURE__ */ React.createElement("code", {
    className: "block whitespace-pre overflow-x-scroll cursor-pointer rounded p-1 pb-1 px-3 text-sm text-gray-800 hover:text-gray-700 bg-gray-100"
  }, code);
};
