import React from "../../_snowpack/pkg/react.js";
import List from "../../lib/components/table/index.js";
import * as Icons from "../../lib/icons/index.js";
import Card from "../../lib/components/card/index.js";
export default (props) => {
  const def = [
    {name: "name", label: "Prop name", render: (c) => /* @__PURE__ */ React.createElement("code", null, c.name)},
    {
      name: "mandatory",
      label: "Mandatory",
      render: (c) => c.mandatory ? /* @__PURE__ */ React.createElement(Icons.Check, {
        className: "text-success"
      }) : /* @__PURE__ */ React.createElement(Icons.Close, {
        className: "text-error"
      })
    },
    {name: "description", title: "Description"}
  ];
  return /* @__PURE__ */ React.createElement(Card, {
    title: "Properties"
  }, /* @__PURE__ */ React.createElement(List, {
    def,
    data: props.data,
    config: {search: false}
  }));
};
