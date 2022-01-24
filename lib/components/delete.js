import React from "../../_snowpack/pkg/react.js";
import HeadlessDelete from "../../_snowpack/pkg/@nexys/react-bootstrap/dist/headless/delete.js";
import Button from "./buttons/main.js";
const DeleteBtn = ({onClick}) => {
  return /* @__PURE__ */ React.createElement(Button, {
    onClick,
    color: "error"
  }, "Delete");
};
const DeleteGeneric = HeadlessDelete(DeleteBtn);
export default DeleteGeneric;
