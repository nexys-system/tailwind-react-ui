import React from "../../_snowpack/pkg/react.js";
import Button from "../../lib/components/buttons/main.js";
import * as C from "../../lib/components/type.js";
export default () => {
  return /* @__PURE__ */ React.createElement("div", {
    className: "w-full"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "font-bold mb-5 text-primary uppercase"
  }, "Button"), /* @__PURE__ */ React.createElement("div", null, "Filled"), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-row mb-10"
  }, /* @__PURE__ */ React.createElement(Button, {
    color: C.ContextColor.primary
  }, "Primary"), /* @__PURE__ */ React.createElement(Button, {
    color: C.ContextColor.secondary
  }, "Secondary"), /* @__PURE__ */ React.createElement(Button, {
    color: C.ContextColor.info
  }, "Info"), /* @__PURE__ */ React.createElement(Button, {
    color: C.ContextColor.warning
  }, "Warning"), /* @__PURE__ */ React.createElement(Button, {
    color: C.ContextColor.error
  }, "Error"), /* @__PURE__ */ React.createElement(Button, {
    color: C.ContextColor.success
  }, "Success")), /* @__PURE__ */ React.createElement("div", null, "Transparent"), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-row"
  }, /* @__PURE__ */ React.createElement(Button, {
    color: C.ContextColor.primary,
    variant: "transparent"
  }, "Primary"), /* @__PURE__ */ React.createElement(Button, {
    color: C.ContextColor.secondary,
    variant: "transparent"
  }, "Secondary"), /* @__PURE__ */ React.createElement(Button, {
    color: C.ContextColor.info,
    variant: "transparent"
  }, "Info"), /* @__PURE__ */ React.createElement(Button, {
    color: C.ContextColor.warning,
    variant: "transparent"
  }, "Warning"), /* @__PURE__ */ React.createElement(Button, {
    color: C.ContextColor.error,
    variant: "transparent"
  }, "Error"), /* @__PURE__ */ React.createElement(Button, {
    color: C.ContextColor.success,
    variant: "transparent"
  }, "Success")), /* @__PURE__ */ React.createElement(Button, {
    isLoading: true
  }, "is loading"), /* @__PURE__ */ React.createElement(Button, {
    disabled: true
  }, "disabled"));
};
