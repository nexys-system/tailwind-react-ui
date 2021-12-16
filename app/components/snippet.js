import React from "../../_snowpack/pkg/react.js";
import * as Snippet from "../../lib/business/snippet.js";
import Typography from "../../lib/components/typography.js";
export default () => /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Typography, {
  variant: "h2"
}, "Snippets"), /* @__PURE__ */ React.createElement(Typography, {
  variant: "h3"
}, "Copy"), /* @__PURE__ */ React.createElement(Snippet.Copy, {
  content: "my content"
}), /* @__PURE__ */ React.createElement(Typography, {
  variant: "h3"
}, "Copy Code Snippet"), /* @__PURE__ */ React.createElement(Snippet.CopyCodeSnippet, {
  content: "my content"
}));
