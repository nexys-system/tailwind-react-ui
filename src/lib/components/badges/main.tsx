import React from "react";
import { ContextColor, contextBdRadius } from "../type";
import * as T from "./type";

const Badge = ({
  children,
  color = ContextColor.primary,
  rounded,
}: T.Props) => (
  <span
    className={`text-xs m-1 border ${
      rounded ? contextBdRadius[rounded] : "rounded-surface"
    } p-1 border-${color}-500 text-${color}-500  hover:border-${color}-800 hover:text-${color}-800`}
  >
    {children}
  </span>
);

export default Badge;
