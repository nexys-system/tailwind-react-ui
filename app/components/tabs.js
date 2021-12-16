import React from "../../_snowpack/pkg/react.js";
import * as Tabs from "../../lib/components/tabs/index.js";
import Typography from "../../lib/components/typography.js";
const navs = [
  {name: "Option #1"},
  {name: "Option #2"},
  {name: "Option #3"},
  {name: "Option #4"}
];
const T = Tabs.Simple(navs);
const navs2 = [1, 2, 3, 4].map((i) => ({
  name: "C" + i,
  Component: /* @__PURE__ */ React.createElement("p", null, "component ", i)
}));
const navs3 = [
  {
    label: "first",
    link: "",
    Component: () => /* @__PURE__ */ React.createElement("p", null, "First Component")
  },
  {
    label: "second",
    link: "/second",
    Component: () => /* @__PURE__ */ React.createElement("p", null, "Second component")
  }
];
export default () => {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Typography, {
    variant: "h2"
  }, "Tabs"), /* @__PURE__ */ React.createElement(Typography, {
    variant: "h3"
  }, "Simple"), /* @__PURE__ */ React.createElement(T, {
    onClick: (v) => alert("click " + v)
  }), /* @__PURE__ */ React.createElement(Typography, {
    variant: "h3"
  }, "Swap Components"), /* @__PURE__ */ React.createElement(Tabs.SwapComponent, {
    navs: navs2
  }), /* @__PURE__ */ React.createElement(Typography, {
    variant: "h3"
  }, "Tabs with Router"), /* @__PURE__ */ React.createElement(Tabs.WRouter, {
    navs: navs3,
    urlPrefix: "/tabs"
  }));
};
