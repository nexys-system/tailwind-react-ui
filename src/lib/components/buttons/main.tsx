import React, { useContext } from "react";
// needs to be replace with notifications context
import { AppContext } from "../../context-provider/theme/context";
import Spinner from "../loader/circular";
import { ButtonProps } from "./type";
import * as Classes from "./classes";

export default ({
  id,
  children,
  onClick,
  type,
  disabled = false,
  color = "primary",
  shade = 500,
  textColor = "text-white",
  variant = "filled",
  isLoading = false,
}: ButtonProps) => {
  const {
    state: { theme },
  } = useContext(AppContext);

  const handleClick = (_e: React.MouseEvent<HTMLButtonElement>): void => {
    onClick && onClick(id);
  };

  const classArray: string[] = Classes.get(
    { color, textColor, variant, shade },
    disabled,
    theme
  );

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
