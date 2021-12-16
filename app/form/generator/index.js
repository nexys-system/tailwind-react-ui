import React from "../../../_snowpack/pkg/react.js";
import Typography from "../../../lib/components/typography.js";
import Simple from "./simple.js";
import FormWContext from "./w-context.js";
export default () => /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Typography, {
  variant: "h2"
}, "Form Generator"), /* @__PURE__ */ React.createElement(Typography, {
  variant: "h3"
}, "simple"), /* @__PURE__ */ React.createElement(Simple, null), /* @__PURE__ */ React.createElement(Typography, {
  variant: "h3"
}, "with context"), /* @__PURE__ */ React.createElement(FormWContext, null), /* @__PURE__ */ React.createElement(Typography, {
  variant: "h3"
}, "with context and (partial) default values"), /* @__PURE__ */ React.createElement(FormWContext, {
  valueDefault: {age: 9, isAccept: true, cat: 3, catObject: {id: 2}}
}));
