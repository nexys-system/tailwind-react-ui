import React from "react";
import * as Inputs from "../../lib/form/inputs";
export default () => {
  const [value, setValue] = React.useState<boolean | undefined>();
  return (
    <>
      <h1>Switch (boolean input)</h1>
      <code>{value}</code>
      <Inputs.Switch value={value} onChange={(v) => setValue(v)} />
    </>
  );
};
