import React from "../../_snowpack/pkg/react.js";
import Table from "../../lib/components/table/index.js";
import Card from "../../lib/components/card/index.js";
const def = [{label: "Country Name", name: "name"}];
const def2 = [
  {label: "Country Name", name: "name", filter: true}
];
const data = [
  {name: "France"},
  {name: "Switzerland"},
  {name: "Germany"},
  {name: "Italy"},
  {name: "Belgium"},
  {name: "Spain"}
];
export default () => {
  return /* @__PURE__ */ React.createElement("div", {
    className: "grid grid-cols-2 gap-2"
  }, /* @__PURE__ */ React.createElement(Card, {
    title: "Table"
  }, /* @__PURE__ */ React.createElement(Table, {
    def,
    data
  })), /* @__PURE__ */ React.createElement(Card, {
    title: "Table with search"
  }, /* @__PURE__ */ React.createElement(Table, {
    def: def2,
    data,
    config: {search: true, nPerPage: 3}
  })));
};
