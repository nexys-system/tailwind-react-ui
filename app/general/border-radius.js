import React from "../../_snowpack/pkg/react.js";
import Typography from "../../lib/components/typography.js";
import {Block, Statement} from "../../lib/components/code/index.js";
export default () => {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Typography, {
    variant: "h2"
  }, "Border radius"), /* @__PURE__ */ React.createElement("p", {
    className: "my-5"
  }, "Border radius can be defined for a scope of components together (via tailwind config), or individually for each component which has this property"), /* @__PURE__ */ React.createElement("div", {
    className: "grid grid-cols-6 gap-3"
  }, ["none", "sm", "md", "lg", "full"].map((c) => {
    return /* @__PURE__ */ React.createElement("div", {
      className: `bg-primary rounded-${c} px-5 py-3 text-white`
    }, c);
  })), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("p", null, "To define the border radius for a component once, the following classes need to be provided in ", /* @__PURE__ */ React.createElement("code", null, "tailwind.config.js"), ":", /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("ol", null, /* @__PURE__ */ React.createElement("li", {
    className: "ml-5"
  }, /* @__PURE__ */ React.createElement("strong", null, "button"), ": defines default border radius for all buttons, including those used in more complex components (e.g. CRUD)"), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("li", {
    className: "ml-5"
  }, /* @__PURE__ */ React.createElement("strong", null, "surface"), ": defines default border radius for all surface components, i.e. Card, Alert, Badge, etc., including those used in more complex components (e.g. CRUD)"), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("li", {
    className: "ml-5"
  }, /* @__PURE__ */ React.createElement("strong", null, "input"), ": defines default border radius for all input fields, including those used in more complex components (e.g. CRUD)"))), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement(Typography, {
    variant: "h4"
  }, "Usage example"), /* @__PURE__ */ React.createElement(Block, {
    code: `
        borderRadius: {
          none: "0",
          sm: "0.125rem",
          DEFAULT: "0.25rem",
          md: "0.375rem",
          lg: "0.5rem",
          full: "9999px",
          surface: "0",
          button: "0.125rem",
          input: "0",
        },`
  }), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement(Statement, {
    code: `<Alert color={C.ContextColor.secondary} rounded="lg">Secondary alert</Alert>`
  }));
};
