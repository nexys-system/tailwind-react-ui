import React from "../../_snowpack/pkg/react.js";
import Typography from "../../lib/components/typography.js";
import Card from "../../lib/components/card.js";
import {Sun as Icon, Edit as EditIcon} from "../../lib/icons/index.js";
const Right = () => {
  const [editShow, setEditShow] = React.useState(false);
  const [sunShow, setSunShow] = React.useState(false);
  return /* @__PURE__ */ React.createElement("span", {
    className: "text-sm"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "#",
    onMouseOver: () => setEditShow(true),
    onMouseOut: () => setEditShow(false)
  }, /* @__PURE__ */ React.createElement(EditIcon, null), editShow && /* @__PURE__ */ React.createElement(React.Fragment, null, "Edit")), /* @__PURE__ */ React.createElement("a", {
    href: "#",
    onMouseOver: () => setSunShow(true),
    onMouseOut: () => setSunShow(false)
  }, /* @__PURE__ */ React.createElement(Icon, null), " ", sunShow && /* @__PURE__ */ React.createElement(React.Fragment, null, "Sun")));
};
export default () => {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Typography, {
    variant: "h2"
  }, "Card"), /* @__PURE__ */ React.createElement(Card, {
    title: "Card Title"
  }, /* @__PURE__ */ React.createElement("p", null, "Content")), /* @__PURE__ */ React.createElement(Card, null, /* @__PURE__ */ React.createElement("p", null, "no title")), /* @__PURE__ */ React.createElement(Card, {
    right: /* @__PURE__ */ React.createElement(Right, null)
  }, /* @__PURE__ */ React.createElement("p", null, "no title")));
};
