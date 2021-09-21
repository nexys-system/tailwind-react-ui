import React from "../../_snowpack/pkg/react.js";
import {Link} from "../../_snowpack/pkg/react-router-dom.js";
export default ({title}) => {
  return /* @__PURE__ */ React.createElement("h5", {
    className: "ml-1  mt-3  mr-md-auto dark:text-white"
  }, /* @__PURE__ */ React.createElement(Link, {
    to: "/",
    className: "font-extralight mr-3 mt-3 text-xl text-black dark:text-white hover:text-sky-500 dark:hover:text-sky-500 transition duration-500 ease-in-out transform",
    style: {
      textDecoration: "none"
    }
  }, /* @__PURE__ */ React.createElement("span", {
    className: "hidden md:inline"
  }, title)));
};
