import React from "react";

export default (props: { progress: number }) => {
  const { progress } = props;
  return (
    <div className="relative pt-1">
      <div className="overflow-hidden h-2 mb-4 text-xs flex  bg-sky-200 shadow-md">
        <div
          style={{
            width: `${progress}%`,
          }}
          className="flex flex-col text-center whitespace-nowrap text-white justify-center bg-primary"
        ></div>
      </div>
    </div>
  );
};
