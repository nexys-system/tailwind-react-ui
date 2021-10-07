import React, {useContext} from "../../../_snowpack/pkg/react.js";
import {AppContext} from "../../context-provider/theme/context.js";
import Spinner from "../loader/circular.js";
import * as Classes from "./classes.js";
import {ContextColor} from "../type.js";
export default ({
  id,
  children,
  onClick,
  type,
  disabled = false,
  color = ContextColor.primary,
  textColor = ContextColor.white,
  variant = "filled",
  isLoading = false
}) => {
  const {
    state: {theme}
  } = useContext(AppContext);
  const handleClick = (_e) => {
    onClick && onClick(id);
  };
  const classArray = Classes.get({color, textColor, variant}, disabled, isLoading, theme);
  return /* @__PURE__ */ React.createElement("button", {
    type,
    className: classArray.join(" "),
    onClick: handleClick,
    disabled: disabled || isLoading
  }, isLoading ? /* @__PURE__ */ React.createElement("span", {
    className: "flex flex-inline"
  }, /* @__PURE__ */ React.createElement(Spinner, null), " Loading") : children);
};
