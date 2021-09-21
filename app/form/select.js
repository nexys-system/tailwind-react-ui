import React, {useState} from "../../_snowpack/pkg/react.js";
import * as Inputs from "../../lib/form/inputs/index.js";
import Wrapper from "../../lib/form/wrapper.js";
const options = [
  {id: 1, name: "Option 1"},
  {id: 2, name: "Option 2"}
];
const Scalar = () => {
  const [value, setValue] = useState();
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Wrapper, {
    label: "Select"
  }, /* @__PURE__ */ React.createElement(Inputs.Select.Scalar, {
    value,
    onChange: (v) => setValue(v),
    options
  })), /* @__PURE__ */ React.createElement("code", null, JSON.stringify(value)));
};
const SelectObject = () => {
  const [value, setValue] = useState();
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Wrapper, {
    label: "Select Object"
  }, /* @__PURE__ */ React.createElement(Inputs.Select.Object, {
    value,
    onChange: (v) => setValue(v),
    options
  })), /* @__PURE__ */ React.createElement("code", null, JSON.stringify(value)));
};
export default () => {
  return /* @__PURE__ */ React.createElement("div", {
    className: "font-extralight"
  }, /* @__PURE__ */ React.createElement(Scalar, null), /* @__PURE__ */ React.createElement("hr", null), /* @__PURE__ */ React.createElement(SelectObject, null));
};
