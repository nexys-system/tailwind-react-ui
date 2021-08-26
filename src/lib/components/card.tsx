import React from "react";

const Card = ({
  children,
  title,
  style,
  className,
}: {
  title?: string;
  children: JSX.Element | JSX.Element[];
  style?: React.CSSProperties;
  className?: string;
}) => {
  return (
    <div
      style={style}
      className={`w-full bg-white dark:bg-coolGray-600 dark:text-white rounded-xl shadow-md ${className}`}
    >
      <div className="">
        <div className="p-8">
          {title && (
            <div className="uppercase tracking-wide text-sm text-primary font-semibold">
              {title}
            </div>
          )}
          {children}
        </div>
      </div>
    </div>
  );
};

export default Card;
