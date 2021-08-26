import React from "react";

import { Link } from "react-router-dom";

export default ({ title }: { title: string }) => {
  return (
    <h5 className="ml-1  mt-3  mr-md-auto dark:text-white">
      <Link
        to={"/"}
        className="font-extralight mr-3 mt-3 text-xl text-black dark:text-white hover:text-sky-500 dark:hover:text-sky-500 transition duration-500 ease-in-out transform"
        style={{
          textDecoration: "none",
        }}
      >
        {/* <img
          src="/logo.png"
          alt="logo"
          className="inline hover:opacity-80"
          width={45}
          height={45}
        />
        &nbsp;&nbsp; */}
        <span className="hidden md:inline">{title}</span>
      </Link>
    </h5>
  );
};
