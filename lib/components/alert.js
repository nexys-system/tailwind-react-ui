import React from "../../_snowpack/pkg/react.js";
import {XCircle} from "../icons/index.js";
export default ({
  children,
  Icon,
  dismissible = false,
  onClick
}) => {
  const [show, setShow] = React.useState(true);
  const handleClick = () => {
    onClick && onClick();
    setShow(false);
  };
  if (!show) {
    return /* @__PURE__ */ React.createElement(React.Fragment, null);
  }
  return /* @__PURE__ */ React.createElement("p", {
    className: "rounded m-1 p-2 bg-primary-500 text-white"
  }, Icon && /* @__PURE__ */ React.createElement(Icon, null), " ", children, dismissible && /* @__PURE__ */ React.createElement("span", {
    onClick: handleClick,
    className: "cursor-pointer float-right"
  }, /* @__PURE__ */ React.createElement(XCircle, null)));
};
