import React from "../../_snowpack/pkg/react.js";
import Typography from "../../lib/components/typography.js";
import Toggle from "../../lib/components/toggle/index.js";
import {Edit} from "./edit.js";
import {View} from "./view.js";
const T = Toggle(Edit, View);
export default () => {
  const data = {name: "my string"};
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Typography, {
    variant: "h2"
  }, "Toggle"), /* @__PURE__ */ React.createElement(T, {
    id: "2",
    data
  }));
};
