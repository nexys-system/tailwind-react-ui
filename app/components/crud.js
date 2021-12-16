import React from "../../_snowpack/pkg/react.js";
import Typography from "../../lib/components/typography.js";
import CRUD from "../../lib/components/crud/index.js";
import {
  FormType
} from "../../_snowpack/pkg/@nexys/react-bootstrap/dist/headless/form/type.js";
import countries from "./list/countries.js";
const def = [{name: "name"}];
const defDetail = [
  {name: "name", uiType: FormType.Text, optional: false}
];
const viewFields = [["Name", "name"]];
const urlPrefix = "/crud";
const crud = {
  list: () => {
    return Promise.resolve(countries);
  },
  detail: (id) => Promise.resolve(countries[id])
};
const C = CRUD(def, defDetail, viewFields, urlPrefix, crud);
export default () => {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Typography, {
    variant: "h2"
  }, "CRUD"), /* @__PURE__ */ React.createElement(C, null));
};
