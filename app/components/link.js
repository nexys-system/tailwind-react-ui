import React from "../../_snowpack/pkg/react.js";
import Typography from "../../lib/components/typography.js";
import * as Icons from "../../lib/icons/index.js";
import {Internal, External} from "../../lib/components/link/index.js";
export default () => {
  return /* @__PURE__ */ React.createElement("div", {
    className: "font-extralight"
  }, /* @__PURE__ */ React.createElement(Typography, {
    variant: "h2"
  }, "Link"), /* @__PURE__ */ React.createElement("p", {
    className: "m-2"
  }, "Formatted internal and external links"), /* @__PURE__ */ React.createElement(Typography, {
    variant: "h4"
  }, "Internal"), /* @__PURE__ */ React.createElement("p", {
    className: "m-2"
  }, "React router link, pointing at another location within the same host"), /* @__PURE__ */ React.createElement(Internal, {
    url: "/modal"
  }, /* @__PURE__ */ React.createElement(Icons.ArrowCircleRight, null), " Some text"), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement(Typography, {
    variant: "h4"
  }, "External"), /* @__PURE__ */ React.createElement("p", {
    className: "m-2"
  }, "External link, by default opens in a new tab (possible to regulate via", " ", /* @__PURE__ */ React.createElement("code", null, "inline"), " parameter)"), /* @__PURE__ */ React.createElement(External, {
    url: "https://tssacademy.biz"
  }, /* @__PURE__ */ React.createElement(Icons.ArrowCircleRight, null), " Some text"));
};
