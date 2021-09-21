import React from "../../_snowpack/pkg/react.js";
import * as Inputs from "../../lib/form/inputs/index.js";
export default () => {
  const [value, setValue] = React.useState();
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("h1", null, "Switch (boolean input)"), /* @__PURE__ */ React.createElement("code", null, value), /* @__PURE__ */ React.createElement(Inputs.Switch, {
    value,
    onChange: (v) => setValue(v)
  }));
};
