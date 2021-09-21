import React from "react";

export default (props: {
  children: JSX.Element | JSX.Element[];
  className?: string;
}) => {
  // const className =
  //   props.className ||
  //   "text-coolGray-700 dark:text-coolGray-200 hover:text-sky-600 dark:hover:text-sky-500 transition duration-300 ease-in-out transform ";
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
