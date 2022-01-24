import React from "../../_snowpack/pkg/react.js";
import Stepper from "../../lib/components/stepper/index.js";
const Icon = ({idx}) => /* @__PURE__ */ React.createElement("div", {
  className: "p-1 font-medium"
}, idx);
export default () => {
  return /* @__PURE__ */ React.createElement(Stepper, {
    steps: [
      {title: "One", Icon: () => /* @__PURE__ */ React.createElement(Icon, {
        idx: 1
      })},
      {title: "Two", Icon: () => /* @__PURE__ */ React.createElement(Icon, {
        idx: 2
      })},
      {title: "Three", Icon: () => /* @__PURE__ */ React.createElement(Icon, {
        idx: 3
      })}
    ],
    activeStep: 1
  });
};
