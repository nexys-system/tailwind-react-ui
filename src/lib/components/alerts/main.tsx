import React from "react";
import { XCircle } from "../../lib/../icons";
import { ContextColor, contextBdRadius } from "../type";
import * as T from "./type";
// inspired from https://getbootstrap.com/docs/5.0/components/alerts/

export default ({
  children,
  Icon,
  dismissible = false,
  onClick,
  color = ContextColor.primary,
  rounded,
}: T.Props) => {
  const [show, setShow] = React.useState<boolean>(true);
  const handleClick = () => {
    onClick && onClick();
    setShow(false);
  };

  if (!show) {
    return <></>;
  }

  return (
    <div
      className={`${
        rounded ? contextBdRadius[rounded] : "rounded-surface"
      } m-1 p-2 bg-${color}-500 text-white`}
    >
      {Icon && <Icon />} {children}
      {dismissible && (
        <span onClick={handleClick} className={"cursor-pointer float-right"}>
          <XCircle />
        </span>
      )}
    </div>
  );
};
