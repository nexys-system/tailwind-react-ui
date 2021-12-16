import React from "../../_snowpack/pkg/react.js";
import {CircularLoader, Loader, Circle} from "../../lib/components/spinner/index.js";
import Typography from "../../lib/components/typography.js";
export default () => {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Typography, {
    variant: "h2"
  }, "Spinner"), /* @__PURE__ */ React.createElement(Loader, null), /* @__PURE__ */ React.createElement(CircularLoader, null), /* @__PURE__ */ React.createElement(Circle, null));
};
