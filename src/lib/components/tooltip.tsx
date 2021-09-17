import React from "react";

export default ({
  children,
  label,
}: {
  children: React.ReactNode;
  label: string;
}) => {
  return (
    <div className="group inline-block relative">
      <div className="group-hover:opacity-100 opacity-0 transition ease-in-out duration-300 absolute z-10 w-36 text-center bottom-full left-1/2 transform -translate-x-1/2">
        <div className="relative mx-2">
          <div className="bg-coolGray-700 text-white text-xs rounded py-1 px-4 right-0 bottom-full">
            {label}
            <svg
              className="absolute h-3 w-full bottom-15 left-0 top-full"
              viewBox="0 0 255 255"
            >
              <polygon
                points="0,0 127.5,127.5 255,0"
                className="fill-current text-coolGray-700"
              />
            </svg>
          </div>
        </div>
      </div>
      {children}
    </div>
  );
};
