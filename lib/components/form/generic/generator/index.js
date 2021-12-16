import React from "../../../../../_snowpack/pkg/react.js";
import FormGenerator from "../../../../../_snowpack/pkg/@nexys/react-bootstrap/dist/headless/form/generator.js";
import {Wrapper} from "../../index.js";
import FormUnit from "../input.js";
const BtnSubmit = ({isLoading}) => /* @__PURE__ */ React.createElement("button", {
  disabled: isLoading,
  type: "submit",
  className: "border rounded border-blue-800 p-2"
}, isLoading && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("span", {
  className: "spinner-border spinner-border-sm",
  role: "status",
  "aria-hidden": "true"
}), /* @__PURE__ */ React.createElement("span", {
  className: "sr-only"
}, "...Loading")), !isLoading && /* @__PURE__ */ React.createElement(React.Fragment, null, "Submit"));
export const FormWDef = (formDef) => FormGenerator(Wrapper.Group, FormUnit, BtnSubmit, formDef);
