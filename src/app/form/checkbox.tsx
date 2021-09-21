import React from "react";
import * as Inputs from "../../lib/form/inputs";
import { FormType } from "../../lib/form/type";
import Wrapper from "../../lib/form/wrapper";
export default () => {
  const [value, setValue] = React.useState<boolean | undefined>();
  return (
    <>
      <code>{value}</code>
      <Wrapper inputType={FormType.Switch} label="Switch (boolean input)">
        <Inputs.Boolean.Checkbox value={value} onChange={(v) => setValue(v)} />
      </Wrapper>
    </>
  );
};
