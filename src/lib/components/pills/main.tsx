import React from "react";

import { getPillClasses } from "./classes";
import { ContextColor } from "../type";
import * as Type from "./type";

export default (props: Type.PillProps) => {
  const {
    id,
    title,
    badge,
    selected,
    onSelect,
    color = ContextColor.primary,
    fullWidth = true,
    rounded,
  } = props;
  return (
    <div
      onClick={() => onSelect && id && onSelect(id)}
      className={getPillClasses({ color, rounded }, selected, fullWidth).join(
        " "
      )}
    >
      {badge && (
        <span
          className={`inline-flex p-2
   ${
     selected
       ? `bg-white dark:bg-${color}-300 text-${color}-900`
       : `bg-${color}-500 text-white`
   } 
    rounded-full h-8 w-8 justify-center items-center font-light`}
        >
          {badge}
        </span>
      )}
      <span className="inline-flex px-2">{title}</span>
    </div>
  );
};
