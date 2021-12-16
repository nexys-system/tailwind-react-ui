import React from "../../_snowpack/pkg/react.js";
import HeadlessDelete from "../../_snowpack/pkg/@nexys/react-bootstrap/dist/headless/delete.js";
const DeleteBtn = ({onClick}) => {
  return /* @__PURE__ */ React.createElement("button", {
    onClick,
    className: "border  rounded text-red-700 border-red-700 p-2"
  }, "Delete");
};
const DeleteGeneric = HeadlessDelete(DeleteBtn);
export default DeleteGeneric;
