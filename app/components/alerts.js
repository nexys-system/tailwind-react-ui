import React from "../../_snowpack/pkg/react.js";
import Alert from "../../lib/components/alerts/main.js";
import {Speakerphone} from "../../lib/icons/index.js";
import * as C from "../../lib/components/type.js";
import Typography from "../../lib/components/typography.js";
export default () => {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Typography, {
    variant: "h2"
  }, "Alerts"), /* @__PURE__ */ React.createElement(Alert, null, "Primary alert (default)"), /* @__PURE__ */ React.createElement(Alert, {
    color: C.ContextColor.secondary
  }, "Secondary alert"), /* @__PURE__ */ React.createElement(Alert, {
    color: C.ContextColor.info
  }, "Info alert"), /* @__PURE__ */ React.createElement(Alert, {
    color: C.ContextColor.success
  }, "Success alert"), /* @__PURE__ */ React.createElement(Alert, {
    color: C.ContextColor.warning
  }, "Warning alert"), /* @__PURE__ */ React.createElement(Alert, {
    color: C.ContextColor.error
  }, "Error alert"), /* @__PURE__ */ React.createElement(Alert, null, /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("b", null, "HTML"), " ", /* @__PURE__ */ React.createElement("i", null, "text"))), /* @__PURE__ */ React.createElement(Alert, {
    Icon: Speakerphone
  }, "With icon"), /* @__PURE__ */ React.createElement(Alert, {
    Icon: Speakerphone,
    dismissible: true
  }, "with dismissible"));
};
