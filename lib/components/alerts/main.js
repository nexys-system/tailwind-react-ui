import React from "../../../_snowpack/pkg/react.js";
import {XCircle} from "../../icons/index.js";
import {ContextColor, contextBdRadius} from "../type.js";
export default ({
  children,
  Icon,
  dismissible = false,
  onClick,
  color = ContextColor.primary,
  rounded
}) => {
  const [show, setShow] = React.useState(true);
  const handleClick = () => {
    onClick && onClick();
    setShow(false);
  };
  if (!show) {
    return /* @__PURE__ */ React.createElement(React.Fragment, null);
  }
  return /* @__PURE__ */ React.createElement("div", {
    className: `${rounded ? contextBdRadius[rounded] : "rounded-surface"} m-1 p-2 bg-${color}-500 text-white`
  }, Icon && /* @__PURE__ */ React.createElement(Icon, null), " ", children, dismissible && /* @__PURE__ */ React.createElement("span", {
    onClick: handleClick,
    className: "cursor-pointer float-right"
  }, /* @__PURE__ */ React.createElement(XCircle, null)));
};
