import React from "../../../_snowpack/pkg/react.js";
import * as FormGenerator from "../../../lib/form/generic-2/generator/index.js";
import {
  FormType
} from "../../../_snowpack/pkg/@nexys/react-bootstrap/dist/headless/form/type.js";
const def = [
  {name: "name", uiType: FormType.Text, optional: false}
];
export const F = FormGenerator.FormWDef(def);
const onSuccess = (d) => {
  alert(JSON.stringify(d));
  return Promise.resolve();
};
export default () => /* @__PURE__ */ React.createElement(F, {
  onSuccess
});
