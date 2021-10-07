import React from "../../_snowpack/pkg/react.js";
import AHref from "../../lib/components/link.js";
import {Statement} from "../../lib/components/code/index.js";
import {GitHub} from "../../lib/icons/index.js";
const badges = [
  [
    "https://badge.fury.io/js/%40nexys%2Ftailwind-react-ui.svg",
    "https://www.npmjs.com/package/@nexys/tailwind-react-ui"
  ],
  [
    "https://img.shields.io/npm/v/@nexys/tailwind-react-ui.svg",
    "https://www.npmjs.com/package/@nexys/tailwind-react-ui"
  ]
];
export default () => {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("h1", {
    className: "text-2xl text-blue-500 py-2"
  }, "React Tailwind UI"), /* @__PURE__ */ React.createElement("p", null, "Collection of React components for tailwind."), /* @__PURE__ */ React.createElement("h3", {
    className: "text-xl text-blue-500 py-2"
  }, "Get Started"), /* @__PURE__ */ React.createElement(Statement, {
    code: "yarn add @nexys/tailwind-react-ui",
    copyToClipboard: true
  }), /* @__PURE__ */ React.createElement("h3", {
    className: "text-xl text-blue-500 py-2"
  }, "Resources"), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement(AHref, {
    link: "https://github.com/nexys-system/tailwind-react-ui"
  }, /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(GitHub, {
    svgProps: {stroke: "none", fill: "black"}
  }), " Github repository"))), /* @__PURE__ */ React.createElement("ul", {
    className: "flex items-stretch "
  }, badges.map((badge, i) => /* @__PURE__ */ React.createElement("li", {
    key: i,
    className: "p-1"
  }, /* @__PURE__ */ React.createElement(AHref, {
    target: "_blank",
    link: badge[1]
  }, /* @__PURE__ */ React.createElement("img", {
    src: badge[0]
  }))))), /* @__PURE__ */ React.createElement("h3", {
    className: "text-xl text-blue-500 py-2"
  }, "Links"), /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", null, "Tailwind official website:", " ", /* @__PURE__ */ React.createElement(AHref, {
    link: "https://tailwindcss.com/"
  }, "https://tailwindcss.com/"))));
};
