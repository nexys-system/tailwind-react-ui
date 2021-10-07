import React from "../../_snowpack/pkg/react.js";
import Badge from "../../lib/components/badges/main.js";
import * as C from "../../lib/components/type.js";
export default () => {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("h1", null, "Badge"), /* @__PURE__ */ React.createElement(Badge, null, "Primary badge (default)"), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement(Badge, {
    color: C.ContextColor.secondary
  }, "Secondary badge"), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement(Badge, {
    color: C.ContextColor.info
  }, "Info badge"), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement(Badge, {
    color: C.ContextColor.success
  }, "Success badge"), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement(Badge, {
    color: C.ContextColor.warning
  }, "Warning badge"), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement(Badge, {
    color: C.ContextColor.error
  }, "Error badge"), /* @__PURE__ */ React.createElement("br", null));
};
