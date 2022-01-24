import React from "../../../_snowpack/pkg/react.js";
import * as Icons from "../../icons/index.js";
const Step = ({title, Icon, active, passed, last}) => {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    className: "flex items-center text-primary relative"
  }, /* @__PURE__ */ React.createElement("div", {
    className: `rounded-full
        transition
        duration-500
        ease-in-out
        h-12
        w-12
        p-3
        flex items-center
        border-2 border-${active || passed ? "primary" : "gray-300"}
        text-${active || passed ? "primary" : "gray-300"}`
  }, passed ? /* @__PURE__ */ React.createElement(Icons.Check, {
    className: "text-center",
    svgProps: {
      strokeWidth: 2,
      width: "100%",
      height: "100%",
      viewBox: "0 0 24 24"
    }
  }) : /* @__PURE__ */ React.createElement(Icon, null)), /* @__PURE__ */ React.createElement("div", {
    className: "\n  absolute\n  top-0\n  -ml-10\n  text-center\n  mt-16\n  w-32\n  text-xs\n  font-medium\n  uppercase\n  text-primary-500\n"
  }, title)), !last && /* @__PURE__ */ React.createElement("div", {
    className: `
          flex-auto
          border-t-2
          transition
          duration-500
          ease-in-out
          border-${active || passed ? "primary" : "gray-300"}
          `
  }));
};
export default ({steps, activeStep = 0}) => {
  return /* @__PURE__ */ React.createElement("div", {
    className: "p-5"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "mx-4 p-4"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex items-center"
  }, steps.map((step, i) => /* @__PURE__ */ React.createElement(Step, {
    key: i,
    idx: i,
    title: step.title,
    active: i === activeStep,
    passed: i < activeStep,
    last: i === steps.length - 1,
    Icon: step.Icon
  })))), /* @__PURE__ */ React.createElement("div", {
    className: "mt-8 p-4"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex p-2 mt-4"
  }, /* @__PURE__ */ React.createElement("button", {
    className: "\n          bg-gray-200\n          text-gray-800\n          active:bg-primary-600\n          font-bold\n          uppercase\n          text-sm\n          px-6\n          py-3\n          rounded\n          shadow\n          hover:shadow-lg\n          outline-none\n          focus:outline-none\n          mr-1\n          mb-1\n          ease-linear\n          transition-all\n          duration-150\n        ",
    type: "button"
  }, "Previous"), /* @__PURE__ */ React.createElement("div", {
    className: "flex-auto flex flex-row-reverse"
  }, /* @__PURE__ */ React.createElement("button", {
    className: "\n            mx-3\n            bg-primary-500\n            text-white\n            active:bg-primary-600\n            font-bold\n            uppercase\n            text-sm\n            px-6\n            py-3\n            rounded\n            shadow\n            hover:shadow-lg\n            outline-none\n            focus:outline-none\n            mr-1\n            mb-1\n            ease-linear\n            transition-all\n            duration-150\n          ",
    type: "button"
  }, "Next"), /* @__PURE__ */ React.createElement("button", {
    className: "\n            text-primary-500\n            bg-transparent\n            border border-solid border-primary-500\n            hover:bg-primary-500 hover:text-white\n            active:bg-primary-600\n            font-bold\n            uppercase\n            text-sm\n            px-6\n            py-3\n            rounded\n            outline-none\n            focus:outline-none\n            mr-1\n            mb-1\n            ease-linear\n            transition-all\n            duration-150\n          ",
    type: "button"
  }, "Skip")))));
};
