import React from "react";
import * as Inputs from "../../lib/form/inputs";
export default () => {
  const [value, setValue] = React.useState<string | undefined>();
  return (
    <>
      <h1>Text Inputs</h1>
      <code>{value}</code>
      <Inputs.Text value={value} onChange={(v) => setValue(v)} />
    </>
  );
};
