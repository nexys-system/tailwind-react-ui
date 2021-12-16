import React from "../../_snowpack/pkg/react.js";
import Typography from "../../lib/components/typography.js";
import Detail from "../../lib/components/detail/index.js";
import {F} from "../form/generator.js";
import V from "../../lib/components/view/index.js";
export const viewItems = [["Name", "name"]];
export const View = V(viewItems);
const redirectUrl = "/";
const d1 = {id: 1, name: "my daa"};
const D = Detail(F, viewItems, {
  detail: (_id) => Promise.resolve(d1),
  update: () => Promise.resolve()
}, redirectUrl, true, 12, void 0, "my edit title");
export default () => {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Typography, {
    variant: "h2"
  }, "Detail"), /* @__PURE__ */ React.createElement(D, {
    id: 1
  }));
};
