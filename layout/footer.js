import React from "../_snowpack/pkg/react.js";
import {github, version} from "../config.js";
export default () => /* @__PURE__ */ React.createElement("footer", {
  className: "h-10 px-10  float-right "
}, /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("small", null, /* @__PURE__ */ React.createElement("a", {
  href: github.sha
}, version))));