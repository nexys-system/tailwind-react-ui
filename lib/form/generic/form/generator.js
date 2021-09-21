import React from "../../../../_snowpack/pkg/react.js";
import * as Form from "../../index.js";
import FormUnit from "./unit.js";
import * as T from "../type.js";
import * as U from "../utils.js";
export default (props) => {
  const {formDef, errors, data, setData, isLoading} = props;
  return /* @__PURE__ */ React.createElement(React.Fragment, null, formDef.filter((fd) => !fd.hide).map((fd, i) => {
    const name = fd.name;
    const errorUnit = errors && U.isError(errors, name) ? errors[name] : void 0;
    return /* @__PURE__ */ React.createElement(Form.Wrapper, {
      errors: errorUnit,
      key: i,
      label: fd.label,
      inputType: fd.uiType === T.FormType.Switch ? "switch" : "default"
    }, /* @__PURE__ */ React.createElement(FormUnit, {
      fd,
      errors: errorUnit,
      value: data[fd.name],
      onChange: (v) => {
        setData({...data, [fd.name]: v});
      },
      disabled: isLoading || fd.disabled === true,
      options: fd.options
    }));
  }));
};
