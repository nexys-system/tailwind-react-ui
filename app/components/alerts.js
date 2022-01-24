import React from "../../_snowpack/pkg/react.js";
import Alert from "../../lib/components/alerts/main.js";
import {Internal as Link} from "../../lib/components/link/index.js";
import {Speakerphone} from "../../lib/icons/index.js";
import * as C from "../../lib/components/type.js";
import Typography from "../../lib/components/typography.js";
import PropList from "./props-list.js";
export default () => {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Typography, {
    variant: "h2"
  }, "Alerts"), /* @__PURE__ */ React.createElement("p", {
    className: "my-5"
  }, "Alert is a surface component to communicate some important information to the user.", /* @__PURE__ */ React.createElement("br", null)), /* @__PURE__ */ React.createElement(Alert, null, "Primary alert (default)"), /* @__PURE__ */ React.createElement(Alert, {
    color: C.ContextColor.secondary
  }, "Secondary alert"), /* @__PURE__ */ React.createElement(Alert, {
    color: C.ContextColor.info
  }, "Info alert"), /* @__PURE__ */ React.createElement(Alert, {
    color: C.ContextColor.success
  }, "Success alert"), /* @__PURE__ */ React.createElement(Alert, {
    color: C.ContextColor.warning
  }, "Warning alert"), /* @__PURE__ */ React.createElement(Alert, {
    color: C.ContextColor.error
  }, "Error alert"), /* @__PURE__ */ React.createElement(Alert, null, /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("b", null, "HTML"), " ", /* @__PURE__ */ React.createElement("i", null, "text"))), /* @__PURE__ */ React.createElement(Alert, {
    Icon: Speakerphone
  }, "With icon"), /* @__PURE__ */ React.createElement(Alert, {
    Icon: Speakerphone,
    dismissible: true
  }, "with dismissible"), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement(PropList, {
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
        name: "children",
        description: "Content of the alert",
        mandatory: true
      },
      {
        id: 4,
        name: "Icon",
        description: "Optional icon in front of the alert"
      },
      {
        id: 5,
        name: "dismissible",
        description: "Indicates if it should be possible to dismiss the alser"
      },
      {id: 6, name: "onClick", description: "On click handler"}
    ]
  }), /* @__PURE__ */ React.createElement("br", null));
};
