import React, { useContext } from "react";
import { AppContext } from "../context-provided/context";
import Spinner from "./loader/circular";

interface Props {
  id?: number | string;
  color?: string;
  disabled?: boolean;
  shade?: number;
  textColor?: string;
  children: JSX.Element | string | number;
  onClick?: (id?: number | string) => void;
  type?: "submit";
  variant?: "filled" | "transparent";
  isLoading?: boolean;
}

export default (props: Props) => {
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
    isLoading = false,
  } = props;

  const {
    state: { theme },
  } = useContext(AppContext);

  const handleClick = (e: any) => {
    if (onClick && typeof onClick === "function") {
      onClick(id);
    }
  };

  const classTransitions =
    "transition-all duration-500 ease-in-out hover:brightness-150 transform hover:-translate-y-1 hover:scale-110";

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

  return (
    <button
      type={type}
      className={classArray.join(" ")}
      onClick={handleClick}
      disabled={disabled}
    >
      {isLoading ? (
        <span className="flex flex-inline">
          <Spinner /> Loading
        </span>
      ) : (
        children
      )}
    </button>
  );
};
