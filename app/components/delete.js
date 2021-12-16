import React from "../../_snowpack/pkg/react.js";
import * as Utils from "../../_snowpack/pkg/@nexys/utils.js";
import Delete from "../../lib/components/delete.js";
import Typography from "../../lib/components/typography.js";
const deleteById = () => Utils.promise.delay(1e3);
const homeLink = "/";
const D = Delete(deleteById, homeLink, "Are you sure you would like to delete?");
export default () => /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Typography, {
  variant: "h2"
}, "Delete"), /* @__PURE__ */ React.createElement(D, {
  id: "myuuid"
}));
