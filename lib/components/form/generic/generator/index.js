import React from "../../../../../_snowpack/pkg/react.js";
import FormGenerator from "../../../../../_snowpack/pkg/@nexys/react-bootstrap/dist/headless/form/generator.js";
import * as Wrapper from "../../wrapper/index.js";
import FormUnit from "../input.js";
import * as Loader from "../../../spinner/index.js";
import Button from "../../../buttons/main.js";
const BtnSubmit = ({isLoading}) => {
  if (isLoading) {
    return /* @__PURE__ */ React.createElement(Loader.Loader, null);
  }
  return /* @__PURE__ */ React.createElement(Button, {
    type: "submit"
  }, "Submit");
};
export const FormWDef = (formDef) => FormGenerator(Wrapper.Group, FormUnit, BtnSubmit, formDef);
