import React from "../../_snowpack/pkg/react.js";
import Typography from "../../lib/components/typography.js";
export default () => {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Typography, {
    variant: "h2"
  }, "Colors"), /* @__PURE__ */ React.createElement("p", {
    className: "my-5"
  }, "Components rely on the intuitive color terminology, so that the following colors need to be defined in the", " ", /* @__PURE__ */ React.createElement("code", null, "tailwind.config.js")), /* @__PURE__ */ React.createElement("div", {
    className: "grid grid-cols-6 gap-3"
  }, ["primary", "secondary", "success", "warning", "error", "info"].map((c) => {
    return /* @__PURE__ */ React.createElement("div", {
      className: `bg-${c} px-5 py-3 text-white`
    }, c);
  })));
};
