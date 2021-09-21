import React from "react";
import * as Inputs from "../../lib/form/inputs";
import Wrapper from "../../lib/form/wrapper";
export default () => {
  const [value, setValue] = React.useState<boolean | undefined>();
  return (
    <>
      <code>{value}</code>
      <Wrapper inputType="switch" label="Switch (boolean input)">
        <Inputs.Switch value={value} onChange={(v) => setValue(v)} />
      </Wrapper>
    </>
  );
};
