import React from "../../../../../_snowpack/pkg/react.js";
import FormGenerator from "../../../../../_snowpack/pkg/@nexys/react-bootstrap/dist/headless/form/generator.js";
import * as Wrapper from "../../wrapper/index.js";
import FormUnit from "../input.js";
import * as Loader from "../../../spinner/index.js";
const BtnSubmit = ({isLoading}) => {
  if (isLoading) {
    return /* @__PURE__ */ React.createElement(Loader.CircularLoader, null);
  }
  return /* @__PURE__ */ React.createElement("button", {
    type: "submit",
    className: "border rounded border-blue-800 p-2"
  }, "Submit");
};
export const FormWDef = (formDef) => FormGenerator(Wrapper.Group, FormUnit, BtnSubmit, formDef);
