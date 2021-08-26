import React from "react";

export default ({
  children,
  label,
}: {
  children: React.ReactNode;
  label: string;
}) => {
  return (
    <span className="relative ">
      <span className="group cursor-pointer relative inline-block text-center">
        {children}
        <span className="mb-3 whitespace-normal text-black opacity-0 w-32 bg-white dark:bg-coolGray-500 shadow-md dark:text-white text-center text-xs rounded-lg py-2 absolute left-10 z-20 group-hover:opacity-100 bottom-full  ml-14 px-3 pointer-events-none">
          {label}
          <svg
            className="absolute text-white dark:text-coolGray-500 h-2 w-full left-10 top-full"
            x="0px"
            y="0px"
            viewBox="0 0 255 255"
            xmlSpace="preserve"
          >
            <polygon className="fill-current" points="0,0 127.5,127.5 255,0" />
          </svg>
        </span>
      </span>
    </span>
  );
};
