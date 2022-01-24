import React from "../../_snowpack/pkg/react.js";
export default (props) => {
  const {progress} = props;
  return /* @__PURE__ */ React.createElement("div", {
    className: "relative pt-1"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "overflow-hidden h-2 mb-4 text-xs flex  bg-primary-200 shadow-md"
  }, /* @__PURE__ */ React.createElement("div", {
    style: {
      width: `${progress}%`
    },
    className: "flex flex-col text-center whitespace-nowrap text-white justify-center bg-primary"
  })));
};
