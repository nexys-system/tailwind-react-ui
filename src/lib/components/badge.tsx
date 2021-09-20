// inspired from https://getbootstrap.com/docs/4.0/components/badge/
import React from "react";

const Badge = ({ children, color = 'blue' }: { children: string; color?: string }) => (
  <span
    className={`text-xs border rounded p-1 border-${color}-500 text-${color}-500  hover:border-${color}-800 hover:text-${color}-800`}
  >
    {children}
  </span>
);

export default Badge;
