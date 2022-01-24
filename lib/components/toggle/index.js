import React from "../../../_snowpack/pkg/react.js";
import ToggleGeneric from "../../../_snowpack/pkg/@nexys/react-bootstrap/dist/headless/toggle/toggle.js";
import * as Icons from "../../icons/index.js";
import Button from "../buttons/main.js";
const ToggleLayout = ({isEdit, setEdit, children}) => /* @__PURE__ */ React.createElement(React.Fragment, null, children, /* @__PURE__ */ React.createElement("span", {
  className: `${isEdit && "float-right -mt-16"}`
}, /* @__PURE__ */ React.createElement(Button, {
  onClick: () => setEdit(!isEdit),
  variant: isEdit ? "transparent" : "filled"
}, /* @__PURE__ */ React.createElement(React.Fragment, null, isEdit ? /* @__PURE__ */ React.createElement(Icons.ArrowCircleLeft, {
  className: "mb-1 mr-1 "
}) : /* @__PURE__ */ React.createElement(Icons.Edit, {
  className: "mr-1 pb-1"
}), isEdit ? "Back" : "Edit"))));
const Toggle = ToggleGeneric(ToggleLayout);
export default Toggle;
