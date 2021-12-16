import React from "../../_snowpack/pkg/react.js";
import Typography from "../../lib/components/typography.js";
import * as U from "../../lib/utils/index.js";
export default () => {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Typography, {
    variant: "h2"
  }, "Miscellaneous"), " ", /* @__PURE__ */ React.createElement(Typography, {
    variant: "h3"
  }, "Save content to file"), /* @__PURE__ */ React.createElement("button", {
    type: "button",
    onClick: () => U.saveByteArray("myfile.txt", "hello world", "plain/text")
  }, "Click me!"));
};
