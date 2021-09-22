import { Theme } from "../../context-provider/theme/type";
import { ButtonStyle } from "./type";

const classTransitions =
  "transition-all duration-500 ease-in-out hover:brightness-150 transform hover:-translate-y-1 hover:scale-110";

export const get = (
  { variant, color, shade, textColor }: ButtonStyle,
  disabled: boolean = false,
  theme: Theme = "light"
): string[] => {
  const classArray: string[] = [
    "rounded-full",

    `m-3 pl-5 pr-5 pt-2 pb-2 ${
      variant === "filled"
        ? textColor
        : `text-${color}-${shade} dark:text-white `
    } border-none`,

    "font-extralight",
  ];

  if (variant === "filled") {
    classArray.push(
      `bg-${color}-${shade} dark:bg-${color}-${
        shade < 900 ? shade + 100 : shade
      }`
    );
    classArray.push(
      theme === "dark"
        ? "hover:shadow-primary"
        : "shadow-sm focus:shadow-md hover:shadow-lg"
    );
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

  return classArray;
};
