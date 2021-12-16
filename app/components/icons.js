import React from "../../_snowpack/pkg/react.js";
import * as Icons from "../../lib/icons/index.js";
import AHref from "../../lib/components/link.js";
export default () => {
  const [showClipboard, setClipboard] = React.useState();
  const handleClick = async (name) => {
    const codeString = `import { ${name} as ${name}Icon } from '@nexys/tailwind-react-ui/dist/icons'`;
    await navigator.clipboard.writeText(codeString);
    alert(`Code for "${name}" copied`);
  };
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("h1", {
    className: "p-2 text-2xl"
  }, "Icons"), /* @__PURE__ */ React.createElement("p", null, "Source: ", /* @__PURE__ */ React.createElement(AHref, {
    link: "https://heroicons.com/"
  }, "Heroicons")), /* @__PURE__ */ React.createElement("ul", null, Object.entries(Icons).sort(([k1], [k2]) => k1.localeCompare(k2)).map(([k, V]) => /* @__PURE__ */ React.createElement("li", {
    key: k,
    onClick: () => handleClick(k)
  }, /* @__PURE__ */ React.createElement(V, null), " ", /* @__PURE__ */ React.createElement("code", {
    onMouseOver: () => setClipboard(k),
    onMouseOut: () => setClipboard(void 0),
    className: " cursor-pointer text-red-500 hover:text-red-800"
  }, k, " ", showClipboard === k && /* @__PURE__ */ React.createElement(Icons.Clipboard, null))))));
};
