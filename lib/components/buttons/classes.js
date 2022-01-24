import {contextBdRadius, contextBgColors, contextTextColors} from "../type.js";
const classTransitions = "transition-all duration-500 ease-in-out hover:brightness-150 transform hover:-translate-y-1 hover:scale-105";
export const get = ({variant, color, textColor, rounded}, disabled = false, isLoading, theme = "light") => {
  const bgColor = contextBgColors[color];
  const textColorClass = contextTextColors[textColor];
  const shade = 500;
  const classArray = [
    rounded ? contextBdRadius[rounded] : "rounded-button",
    `m-3 pl-5 pr-5 pt-2 pb-2 ${variant === "filled" ? textColorClass : contextTextColors[color]} border-none`,
    "font-extralight"
  ];
  if (variant === "filled") {
    classArray.push(`shadow ${bgColor} hover:${bgColor}-400`);
    if (!disabled && !isLoading) {
      classArray.push(theme === "dark" ? "hover:shadow" : "shadow-sm focus:shadow-md hover:shadow-lg");
    }
  }
  if (variant === "transparent") {
    classArray.push(`hover:font-light hover:text-${color}-${shade + 200} font-normal`);
  }
  const classDisabled = "opacity-50 cursor-default";
  if (!disabled && !isLoading) {
    classArray.push(classTransitions);
  }
  if (disabled || isLoading) {
    classArray.push(classDisabled);
  }
  return classArray;
};
