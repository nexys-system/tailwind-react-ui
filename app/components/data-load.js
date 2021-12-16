import React from "../../_snowpack/pkg/react.js";
import * as Utils from "../../_snowpack/pkg/@nexys/utils.js";
import DataLoad from "../../lib/components/data-load/index.js";
import Typography from "../../lib/components/typography.js";
const wait1s = () => Utils.promise.delay(1e3);
export default () => /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Typography, {
  variant: "h2"
}, "Data Load"), /* @__PURE__ */ React.createElement(DataLoad, {
  Component: () => /* @__PURE__ */ React.createElement(React.Fragment, null, "Hello"),
  getData: wait1s
}));
