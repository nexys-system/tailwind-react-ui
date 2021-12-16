import React from "react";

const formClass = [
  "bg-white",
  "shadow-md",
  "rounded",
  "px-8",
  "pt-6",
  "pb-8",
  "mb-4",
];

const Card = ({
  children,
  title,
  style,
  className = formClass.join(" "),
  colSpan,
  right,
}: {
  title?: string;
  children: JSX.Element | JSX.Element[];
  style?: React.CSSProperties;
  className?: string;
  colSpan?: number;
  right?: JSX.Element | JSX.Element[];
}) => {
  return (
    <div
      style={style}
      className={className + (colSpan ? " col-span-" + colSpan : "")} //className={`w-full bg-white dark:bg-coolGray-600 dark:text-white rounded-xl shadow-md ${className} m-1`}
    >
      {right && <div className={"float-right pr-4 pt-4"}>{right}</div>}
      <div className="p-4"></div>
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
