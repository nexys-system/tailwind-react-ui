import React from "../../_snowpack/pkg/react.js";
import Typography from "../../lib/components/typography.js";
import * as Wrappers from "../../lib/components/form/wrapper/index.js";
export default () => {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Typography, {
    variant: "h2"
  }, "Form Wrapper"), /* @__PURE__ */ React.createElement(Wrappers.Group, {
    label: "My label"
  }, /* @__PURE__ */ React.createElement(React.Fragment, null, "inside of the wrapper")), /* @__PURE__ */ React.createElement(Wrappers.Group, {
    label: "My label",
    errors: ["error #1", "error #2"]
  }, /* @__PURE__ */ React.createElement(React.Fragment, null, "inside of the wrapper")), /* @__PURE__ */ React.createElement(Wrappers.Group, {
    label: "My label",
    info: "additional information"
  }, /* @__PURE__ */ React.createElement(React.Fragment, null, "inside of the wrapper")));
};
