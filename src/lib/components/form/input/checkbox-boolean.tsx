import React from "react";

import InputBooleanGeneric, {
  BooleanInputProps,
} from "@nexys/react-bootstrap/dist/headless/form/boolean";

const UI = ({ errors, setToggle, checked, disabled }: BooleanInputProps) => (
  <input
    className={"" + (errors && errors.length > 0 ? "  is-invalid" : "")}
    disabled={disabled}
    type="checkbox"
    checked={checked}
    onChange={setToggle}
  />
);

const InputBoolean = InputBooleanGeneric(UI);

export default InputBoolean;
