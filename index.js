import React from "./_snowpack/pkg/react.js";
import ReactDOM from "./_snowpack/pkg/react-dom.js";
import {BrowserRouter} from "./_snowpack/pkg/react-router-dom.js";
import Layout from "./layout/index.js";
import Router from "./router.js";
import {basename} from "./config.js";
ReactDOM.render(/* @__PURE__ */ React.createElement(BrowserRouter, {
  basename
}, /* @__PURE__ */ React.createElement(Layout, null, /* @__PURE__ */ React.createElement(Router, null))), document.getElementById("root"));
