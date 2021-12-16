import React from "../../_snowpack/pkg/react.js";
import {Clipboard, LockOpen as ViewIcon} from "../icons/index.js";
export const Copy = ({content}) => {
  const [copied, setCopied] = React.useState(false);
  const handleCopy = async () => {
    await navigator.clipboard.writeText(content);
    setCopied(true);
  };
  if (copied) {
    setTimeout(() => setCopied(false), 2e3);
    return /* @__PURE__ */ React.createElement("span", null, "Copied!");
  }
  return /* @__PURE__ */ React.createElement("span", {
    className: "cursor-pointer",
    onClick: handleCopy
  }, /* @__PURE__ */ React.createElement(Clipboard, null));
};
export const truncateString = (s, max = 40) => {
  if (!s) {
    return "-";
  }
  const l = s.length;
  if (max === 0) {
    return "";
  }
  if (l > max) {
    return s.substring(0, max) + "...";
  }
  return s;
};
export const CopyCodeSnippet = ({
  content,
  truncate,
  toggleView = false
}) => {
  const [truncateOverride, setTruncate] = React.useState(false);
  const c = truncateOverride === true || truncate === void 0 ? content : truncateString(content, truncate);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("code", null, c), /* @__PURE__ */ React.createElement(Copy, {
    content
  }), toggleView && /* @__PURE__ */ React.createElement("span", {
    className: "cursor-pointer",
    onClick: () => setTruncate(!truncateOverride)
  }, /* @__PURE__ */ React.createElement(ViewIcon, null)));
};
