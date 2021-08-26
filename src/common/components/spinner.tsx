import React from "react";

export default (props: {
  className?: string;
  dotClassName?: string;
  dotSize?: number;
}) => {
  const { className = "m-10", dotClassName = "pr-10", dotSize = 3 } = props;

  const wrapperClasses = `text-center relative ${className}`;
  const dotClasses = `h-${dotSize} w-${dotSize} ${dotClassName}`;
  const animationClasses = `inline-flex absolute h-${dotSize} w-${dotSize} rounded-full bg-primary opacity-75 `;
  return (
    <div className={wrapperClasses}>
      <span className={dotClasses}>
        <span className={`animate-ping100 ${animationClasses}`}></span>
      </span>
      <span className={dotClasses}>
        <span className={`animate-ping200 ${animationClasses}`}></span>
      </span>
      <span className={dotClasses}>
        <span className={`animate-ping300 ${animationClasses}`}></span>
      </span>
    </div>
  );
};
