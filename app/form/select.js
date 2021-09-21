import React, {useState} from "../../_snowpack/pkg/react.js";
import * as Inputs from "../../lib/form/inputs/index.js";
import Wrapper from "../../lib/form/wrapper.js";
export default () => {
  const [sv, setSv] = useState({
    id: 1,
    name: "Option 1"
  });
  return /* @__PURE__ */ React.createElement("div", {
    className: "font-extralight"
  }, /* @__PURE__ */ React.createElement(Wrapper, {
    label: "Select"
  }, /* @__PURE__ */ React.createElement(Inputs.Select, {
    value: sv,
    onChange: (v) => setSv(v),
    options: [
      {id: 1, name: "Option 1"},
      {id: 2, name: "Option 2"}
    ]
  })));
};
