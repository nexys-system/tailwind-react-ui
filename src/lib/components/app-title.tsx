import React from "react";

import { Link } from "react-router-dom";

export default ({ title }: { title: string }) => {
  return (
    <h5 className="ml-1  mt-3  mr-md-auto dark:text-white">
      <Link
        to={"/"}
        className="font-extralight mr-3 mt-3 text-xl text-black dark:text-white hover:text-primary dark:hover:text-primary-500 transition duration-500 ease-in-out transform"
        style={{
          textDecoration: "none",
        }}
      >
        <span className="hidden md:inline">{title}</span>
      </Link>
    </h5>
  );
};
