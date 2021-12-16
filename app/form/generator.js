import React from "../../_snowpack/pkg/react.js";
import Typography from "../../lib/components/typography.js";
import * as FormGenerator from "../../lib/components/form/generic/generator/index.js";
import {
  FormType
} from "../../_snowpack/pkg/@nexys/react-bootstrap/dist/headless/form/type.js";
const def = [
  {name: "name", uiType: FormType.Text, optional: false}
];
export const F = FormGenerator.FormWDef(def);
const onSuccess = (d) => {
  alert(JSON.stringify(d));
  return Promise.resolve();
};
export default () => {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Typography, null, "Form Generator"), /* @__PURE__ */ React.createElement(F, {
    onSuccess
  }));
};
