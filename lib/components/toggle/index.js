import React from "../../../_snowpack/pkg/react.js";
import ToggleGeneric from "../../../_snowpack/pkg/@nexys/react-bootstrap/dist/headless/toggle/toggle.js";
const ToggleLayout = ({isEdit, setEdit, children}) => /* @__PURE__ */ React.createElement(React.Fragment, null, children, /* @__PURE__ */ React.createElement("button", {
  onClick: () => setEdit(!isEdit),
  className: "rounded border border-black p-2"
}, isEdit ? "back to View" : "Edit"));
const Toggle = ToggleGeneric(ToggleLayout);
export default Toggle;
