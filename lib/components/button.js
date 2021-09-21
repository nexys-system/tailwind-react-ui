import React, {useContext} from "../../_snowpack/pkg/react.js";
import {AppContext} from "../interface/store/context.js";
import Spinner from "./spinner2.js";
export default (props) => {
  const {
    id,
    color = "sky",
    shade = 500,
    children,
    textColor = "text-white",
    onClick,
    type,
    disabled = false,
    variant = "filled",
    isLoading = false
  } = props;
  const {
    state: {theme}
  } = useContext(AppContext);
  const handleClick = (e) => {
    if (onClick && typeof onClick === "function") {
      onClick(id);
    }
  };
  const classTransitions = "transition-all duration-500 ease-in-out hover:brightness-150 transform hover:-translate-y-1 hover:scale-110";
  const classArray = [
    "rounded-full",
    `m-3 pl-5 pr-5 pt-2 pb-2 ${variant === "filled" ? textColor : `text-${color}-${shade} dark:text-white `} border-none`,
    "font-extralight"
  ];
  if (variant === "filled") {
    classArray.push(`bg-${color}-${shade} dark:bg-${color}-${shade < 900 ? shade + 100 : shade}`);
    classArray.push(theme === "dark" ? "hover:shadow-primary" : "shadow-sm focus:shadow-md hover:shadow-lg");
  }
  if (variant === "transparent") {
    classArray.push(`hover:font-light hover:text-${color}-${shade + 200}`);
  }
  const classDisabled = "opacity-50 cursor-default";
  if (!disabled) {
    classArray.push(classTransitions);
  }
  if (disabled) {
    classArray.push(classDisabled);
  }
  return /* @__PURE__ */ React.createElement("button", {
    type,
    className: classArray.join(" "),
    onClick: handleClick,
    disabled
  }, isLoading ? /* @__PURE__ */ React.createElement("span", {
    className: "flex flex-inline"
  }, /* @__PURE__ */ React.createElement(Spinner, null), " Loading") : children);
};
