import React from "../../_snowpack/pkg/react.js";
export default (props) => {
  const {className = "m-10", dotClassName = "pr-10", dotSize = 3} = props;
  const wrapperClasses = `text-center relative ${className}`;
  const dotClasses = `h-${dotSize} w-${dotSize} ${dotClassName}`;
  const animationClasses = `inline-flex absolute h-${dotSize} w-${dotSize} rounded-full bg-primary opacity-75 `;
  return /* @__PURE__ */ React.createElement("div", {
    className: wrapperClasses
  }, /* @__PURE__ */ React.createElement("span", {
    className: dotClasses
  }, /* @__PURE__ */ React.createElement("span", {
    className: `animate-ping100 ${animationClasses}`
  })), /* @__PURE__ */ React.createElement("span", {
    className: dotClasses
  }, /* @__PURE__ */ React.createElement("span", {
    className: `animate-ping200 ${animationClasses}`
  })), /* @__PURE__ */ React.createElement("span", {
    className: dotClasses
  }, /* @__PURE__ */ React.createElement("span", {
    className: `animate-ping300 ${animationClasses}`
  })));
};
