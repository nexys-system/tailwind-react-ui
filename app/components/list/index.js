import React from "../../../_snowpack/pkg/react.js";
import data from "./countries.js";
import List from "../../../lib/components/list/index.js";
import Typography from "../../../lib/components/typography.js";
const def = [
  {label: "Country Name", name: "name"},
  {label: "Population", name: "population"},
  {label: "Area", name: "area"}
];
const getData = () => Promise.resolve(data);
export default () => /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Typography, {
  variant: "h2"
}, "List"), /* @__PURE__ */ React.createElement(List, {
  config: {search: false},
  def,
  getData
}));
