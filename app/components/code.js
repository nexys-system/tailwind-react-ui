import React from "../../_snowpack/pkg/react.js";
import {Statement} from "../../lib/components/code/index.js";
export default () => {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("h1", null, "Code"), /* @__PURE__ */ React.createElement(Statement, {
    code: "yarn add @nexys/tailwind-react-ui"
  }), /* @__PURE__ */ React.createElement("h3", null, "with copy"), /* @__PURE__ */ React.createElement(Statement, {
    code: "yarn add @nexys/tailwind-react-ui",
    copyToClipboard: true
  }));
};
