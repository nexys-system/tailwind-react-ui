import React from "../../_snowpack/pkg/react.js";
import Typography from "../../lib/components/typography.js";
import V from "../../lib/components/view/index.js";
const viewItems = [["Name", "name"]];
export const View = V(viewItems);
export default () => {
  const data = {name: "my string"};
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Typography, {
    variant: "h2"
  }, "View"), /* @__PURE__ */ React.createElement(View, {
    data
  }));
};
