import React from "react";

export default (props: {
  children: JSX.Element | JSX.Element[];
  className?: string;
}) => {
  return (
    <svg
      className={`w-6 h-6 ${props.className} inline`}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      {props.children}
    </svg>
  );
};
