import React from "../../../../_snowpack/pkg/react.js";
import * as Inputs from "../../inputs/index.js";
import * as T from "../type.js";
const FormUnit = ({
  fd,
  errors,
  value,
  onChange,
  disabled,
  options = []
}) => {
  const commonProps = {errors, value, onChange, disabled, options};
  switch (fd.uiType) {
    case T.FormType.Text:
      return /* @__PURE__ */ React.createElement(Inputs.Text, {
        ...commonProps
      });
    case T.FormType.Number:
      return /* @__PURE__ */ React.createElement(Inputs.Number, {
        ...commonProps
      });
    case T.FormType.Select:
      return /* @__PURE__ */ React.createElement(Inputs.Select.Scalar, {
        ...commonProps
      });
    case T.FormType.Switch:
      return /* @__PURE__ */ React.createElement(Inputs.Boolean.Switch, {
        ...commonProps
      });
  }
};
export default FormUnit;
