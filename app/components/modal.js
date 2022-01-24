import React, {useState} from "../../_snowpack/pkg/react.js";
import Modal from "../../lib/components/modal/index.js";
import Button from "../../lib/components/buttons/main.js";
import Typography from "../../lib/components/typography.js";
import confirm from "../../lib/components/modal/confirm.js";
import {Block} from "../../lib/components/code/index.js";
export default () => {
  const [open, setOpen] = useState(false);
  const [result, setResult] = useState(null);
  return /* @__PURE__ */ React.createElement("div", {
    className: "font-extralight"
  }, /* @__PURE__ */ React.createElement(Typography, {
    variant: "h2"
  }, "Modal"), /* @__PURE__ */ React.createElement("p", {
    className: "m-2"
  }, "Pop-up window on the same page to give some extra information or request an action from a user"), /* @__PURE__ */ React.createElement(Typography, {
    variant: "h4"
  }, "Simple"), /* @__PURE__ */ React.createElement("p", {
    className: "m-2"
  }, "A simple modal wrapper where the whole body needs to be pasted"), /* @__PURE__ */ React.createElement(Button, {
    onClick: () => setOpen(!open)
  }, "Show modal"), /* @__PURE__ */ React.createElement(Modal, {
    open
  }, /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("p", {
    className: "text-center m-3"
  }, "Some content here", /* @__PURE__ */ React.createElement("br", null), "And here"), /* @__PURE__ */ React.createElement("hr", null), /* @__PURE__ */ React.createElement(Button, {
    onClick: () => setOpen(false)
  }, "Close"))), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement(Typography, {
    variant: "h4"
  }, "Confirm"), /* @__PURE__ */ React.createElement("p", {
    className: "m-2"
  }, "Confirm modal: used as a promise, provides resolve and reject callbacks"), /* @__PURE__ */ React.createElement(Button, {
    color: "warning",
    onClick: () => {
      confirm({message: "Are you sure?"}).then(() => setResult("You selected CONFIRM"), () => setResult("You selected CANCEL"));
    }
  }, "Do something dangerous"), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("code", null, result), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("div", {
    className: "m-2"
  }, /* @__PURE__ */ React.createElement("p", null, "Usage:"), /* @__PURE__ */ React.createElement(Block, {
    code: `confirm({ message: "Are you sure?" }).then(
        () => setResult("You selected CONFIRM"),
        () => setResult("You selected CANCEL")
      );`
  })));
};
