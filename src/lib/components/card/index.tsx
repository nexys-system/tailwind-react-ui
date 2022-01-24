import {
  contextBdRadius,
  ContextBorderRadius,
  ContextBorderRadiusString,
} from "../type";
import React from "react";

const formClass = [
  "bg-white",
  "shadow-md",
  "px-8",
  "pt-6",
  "pb-8",
  // "m-2",
  "mb-4",
];

const Card = ({
  children,
  title,
  style,
  className = formClass.join(" "),
  colSpan,
  right,
  rounded,
}: {
  title?: string;
  children: JSX.Element | JSX.Element[];
  style?: React.CSSProperties;
  className?: string;
  colSpan?: number;
  right?: JSX.Element | JSX.Element[];
  rounded?: ContextBorderRadius | ContextBorderRadiusString;
}) => {
  return (
    <div
      style={style}
      className={`${className} ${
        rounded ? contextBdRadius[rounded] : "rounded-surface"
      } ${colSpan ? " col-span-" + colSpan : ""}
        `} //className={`w-full bg-white dark:bg-coolGray-600 dark:text-white rounded-xl shadow-md ${className} m-1`}
    >
      {right && <div className={"float-right pr-4"}>{right}</div>}
      <div className=""></div>
      {title && (
        <div className="uppercase tracking-wide text-sm text-primary font-semibold">
          {title}
        </div>
      )}
      {children}
    </div>
  );
};

export default Card;
