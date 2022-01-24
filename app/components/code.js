import React from "../../_snowpack/pkg/react.js";
import {Statement, Block} from "../../lib/components/code/index.js";
import Typography from "../../lib/components/typography.js";
export default () => {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Typography, {
    variant: "h2"
  }, "Code"), /* @__PURE__ */ React.createElement("p", null, "Formatted code extract"), /* @__PURE__ */ React.createElement(Statement, {
    code: "yarn add @nexys/tailwind-react-ui"
  }), /* @__PURE__ */ React.createElement("p", null, "with copy"), /* @__PURE__ */ React.createElement(Statement, {
    code: "yarn add @nexys/tailwind-react-ui",
    copyToClipboard: true
  }), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement(Typography, {
    variant: "h4"
  }, "Code block"), /* @__PURE__ */ React.createElement(Block, {
    code: `td > code {
  background: #ffeff0;
  word-wrap: break-word;
  box-decoration-break: clone;
  padding: .1rem .3rem .2rem;
  border-radius: .2rem;
}`
  }));
};
