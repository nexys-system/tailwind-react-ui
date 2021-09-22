import React from "../../_snowpack/pkg/react.js";
import Alert from "../../lib/components/alert.js";
import {Check} from "../../lib/icons/index.js";
export default () => {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("h1", null, "Alert"), /* @__PURE__ */ React.createElement(Alert, null, "gfd"), /* @__PURE__ */ React.createElement(Alert, {
    Icon: Check
  }, "gfd 2"), /* @__PURE__ */ React.createElement(Alert, {
    Icon: Check,
    dismissible: true
  }, "gfd 2"));
};
