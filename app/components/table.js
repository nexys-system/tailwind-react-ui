import React from "../../_snowpack/pkg/react.js";
import Table from "../../lib/components/table/index.js";
const def = [{label: "Country Name", name: "name"}];
const data = [
  {name: "France"},
  {name: "Switzerland"},
  {name: "Germany"},
  {name: "Italy"},
  {name: "Belgium"},
  {name: "Spain"}
];
export default () => {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("h1", {
    className: "text-xl p-1"
  }, "Table"), /* @__PURE__ */ React.createElement(Table, {
    def,
    data
  }), /* @__PURE__ */ React.createElement("h1", {
    className: "text-xl p-1"
  }, "Table with filter"), /* @__PURE__ */ React.createElement(Table, {
    def,
    data,
    config: {search: true, nPerPage: 3}
  }));
};
