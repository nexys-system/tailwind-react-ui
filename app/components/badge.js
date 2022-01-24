import React from "../../_snowpack/pkg/react.js";
import Badge from "../../lib/components/badges/main.js";
import * as C from "../../lib/components/type.js";
import PropList from "./props-list.js";
import {Internal as Link} from "../../lib/components/link/index.js";
export default () => {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("h1", null, "Badge"), /* @__PURE__ */ React.createElement(Badge, null, "Primary badge (default)"), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement(Badge, {
    color: C.ContextColor.secondary
  }, "Secondary badge"), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement(Badge, {
    color: C.ContextColor.info
  }, "Info badge"), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement(Badge, {
    color: C.ContextColor.success
  }, "Success badge"), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement(Badge, {
    color: C.ContextColor.warning
  }, "Warning badge"), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement(Badge, {
    color: C.ContextColor.error
  }, "Error badge"), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement(PropList, {
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
        description: "Content of the badge",
        mandatory: true
      }
    ]
  }));
};
