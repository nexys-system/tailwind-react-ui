import React from "react";
import { ContextColor } from "../type";
import * as T from "./type";

const Badge = ({ children, color = ContextColor.primary }: T.Props) => (
  <span
    className={`text-xs m-1 border rounded p-1 border-${color}-500 text-${color}-500  hover:border-${color}-800 hover:text-${color}-800`}
  >
    {children}
  </span>
);

export default Badge;
