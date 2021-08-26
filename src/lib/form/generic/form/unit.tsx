import React from "react";
import * as Inputs from "../../inputs";
import * as T from "../type";

const FormUnit = <A,>({
  fd,
  errors,
  value,
  onChange,
  disabled,
  options = [],
}: {
  fd: T.FormDef<A>;
  errors?: string[];
  value: any;
  disabled: boolean;
  onChange: (v: any) => void;
  options?: { id: number | string; name: string }[];
}) => {
  const commonProps = { errors, value, onChange, disabled, options };

  switch (fd.uiType) {
    case T.FormType.Text:
      return <Inputs.Text {...commonProps} />;
    case T.FormType.Number:
      return <Inputs.Number {...commonProps} />;
    case T.FormType.Select:
      return <Inputs.Select {...commonProps} />;
    case T.FormType.Switch:
      return <Inputs.Switch {...commonProps} />;
  }
};

export default FormUnit;
