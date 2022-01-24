import React from "../../_snowpack/pkg/react.js";
import Button from "../../lib/components/buttons/main.js";
import * as C from "../../lib/components/type.js";
import PropList from "./props-list.js";
import {Internal as Link} from "../../lib/components/link/index.js";
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
  }, "Success")), /* @__PURE__ */ React.createElement("div", null, "With different border radius"), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-row"
  }, /* @__PURE__ */ React.createElement(Button, {
    color: C.ContextColor.primary,
    rounded: "sm"
  }, "Small"), /* @__PURE__ */ React.createElement(Button, {
    color: C.ContextColor.secondary,
    rounded: "md"
  }, "Medium"), /* @__PURE__ */ React.createElement(Button, {
    color: C.ContextColor.info,
    rounded: "lg"
  }, "Large"), /* @__PURE__ */ React.createElement(Button, {
    color: C.ContextColor.warning,
    rounded: "full"
  }, "Full"), /* @__PURE__ */ React.createElement(Button, {
    color: C.ContextColor.error,
    rounded: "none"
  }, "None")), /* @__PURE__ */ React.createElement(Button, {
    isLoading: true
  }, "is loading"), /* @__PURE__ */ React.createElement(Button, {
    disabled: true
  }, "disabled"), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement(PropList, {
    data: [
      {
        id: 1,
        name: "color",
        mandatory: true,
        description: /* @__PURE__ */ React.createElement("span", null, "See ", /* @__PURE__ */ React.createElement(Link, {
          url: "/color"
        }, "Colors "))
      },
      {
        id: 2,
        name: "rounded",
        mandatory: false,
        description: /* @__PURE__ */ React.createElement("span", null, "See ", /* @__PURE__ */ React.createElement(Link, {
          url: "/radius"
        }, "Border Radius "))
      },
      {
        id: 3,
        name: "textColor",
        description: /* @__PURE__ */ React.createElement("span", null, "See ", /* @__PURE__ */ React.createElement(Link, {
          url: "/color"
        }, "Colors ")),
        mandatory: true
      },
      {
        id: 4,
        name: "variant",
        description: /* @__PURE__ */ React.createElement("span", null, /* @__PURE__ */ React.createElement("code", null, "filled | transparent"))
      },
      {
        id: 5,
        name: "id",
        description: ""
      },
      {id: 6, name: "disabled", description: ""},
      {
        id: 7,
        name: "children",
        description: "Content of the button",
        mandatory: true
      },
      {id: 8, name: "onClick", description: "Optional handler"},
      {
        id: 9,
        name: "type",
        description: /* @__PURE__ */ React.createElement("span", null, /* @__PURE__ */ React.createElement("code", null, "button | submit | reset"))
      },
      {
        id: 10,
        name: "isLoading",
        description: "Indicates if the button should be disabled to to loading event"
      }
    ]
  }));
};
