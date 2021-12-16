import React from "react";
import * as Inputs from "../../lib/components/form/input";
export default () => {
  const [value, setValue] = React.useState<number | undefined>();
  return (
    <>
      <h1>Number Inputs</h1>
      <code>{value}</code>
      <Inputs.Number value={value} onChange={(v) => setValue(v)} />
    </>
  );
};
