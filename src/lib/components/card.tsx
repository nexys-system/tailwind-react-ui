import React from "react";

const Card = ({
  children,
  title,
  style,
  className,
  right,
}: {
  title?: string;
  children: JSX.Element | JSX.Element[];
  style?: React.CSSProperties;
  className?: string;
  right?: JSX.Element | JSX.Element[];
}) => {
  return (
    <div
      style={style}
      className={`w-full bg-white dark:bg-coolGray-600 dark:text-white rounded-xl shadow-md ${className} m-1`}
    >
      {right && <div className={"float-right pr-4 pt-4"}>{right}</div>}
      <div className="p-4">
        {title && (
          <div className="uppercase tracking-wide text-sm text-primary font-semibold">
            {title}
          </div>
        )}
        {children}
      </div>
    </div>
  );
};

export default Card;
