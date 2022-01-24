import React from "../../../../_snowpack/pkg/react.js";
import * as V from "../../../../_snowpack/pkg/@nexys/validation.js";
import * as U from "../utils.js";
import Button from "../../../components/buttons/main.js";
import Generator from "./generator.js";
const FormGenerator = ({
  formDef,
  onSuccess,
  isLoading = false,
  valueDefault = {},
  errors: errorsDefault,
  submit = {label: "Submit"},
  FormUI = Generator
}) => {
  const [data, setData] = React.useState(valueDefault);
  const [errors, setErrors] = React.useState(errorsDefault);
  React.useEffect(() => {
    setErrors(errorsDefault);
  }, [errorsDefault]);
  const validator = U.generateValidatorFromDef(formDef);
  const handleSubmit = (event) => {
    event.preventDefault();
    const v = V.Main.checkObject(data, validator);
    setErrors(v);
    if (Object.values(v).length === 0) {
      onSuccess(data);
    }
  };
  return /* @__PURE__ */ React.createElement("form", {
    onSubmit: handleSubmit
  }, /* @__PURE__ */ React.createElement(FormUI, {
    formDef,
    isLoading,
    data,
    errors,
    setData
  }), /* @__PURE__ */ React.createElement(Button, {
    isLoading,
    type: "submit"
  }, submit.label));
};
export default FormGenerator;
