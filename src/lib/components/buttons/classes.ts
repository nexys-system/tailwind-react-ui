import { contextBgColors, contextTextColors } from "../type";
import { Theme } from "../../context-provider/theme/type";
import { ButtonStyle } from "./type";

const classTransitions =
  "transition-all duration-500 ease-in-out hover:brightness-150 transform hover:-translate-y-1 hover:scale-110";

export const get = (
  { variant, color, textColor }: ButtonStyle,
  disabled: boolean = false,
  isLoading?: boolean,
  theme: Theme = "light"
): string[] => {
  const bgColor = contextBgColors[color];
  const textColorClass = contextTextColors[textColor];
  // to remove (will not work with tailwind compilation)
  const shade = 500;

  const classArray: string[] = [
    "rounded-full",
    `m-3 pl-5 pr-5 pt-2 pb-2 ${
      variant === "filled" ? textColorClass : contextTextColors[color]
    } border-none`,
    "font-extralight",
  ];

  if (variant === "filled") {
    classArray.push(
      `${bgColor} hover:${bgColor}-400` //dark:bg-${color}-${shade < 900 ? shade + 100 : shade}`
    );

    if (!disabled && !isLoading) {
      classArray.push(
        theme === "dark"
          ? "hover:shadow-primary"
          : "shadow-sm focus:shadow-md hover:shadow-lg"
      );
    }
  }

  if (variant === "transparent") {
    classArray.push(
      `hover:font-light hover:text-${color}-${shade + 200} font-normal`
    );
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
