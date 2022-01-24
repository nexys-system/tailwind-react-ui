import React from "react";
import * as Inputs from "../../lib/form/inputs";
export default () => {
  const [value, setValue] = React.useState<string | undefined>();
  return (
    <>
      <h1>Textarea Inputs</h1>
      <code>{value}</code>
      <Inputs.Textarea value={value} onChange={(v) => setValue(v)} />
    </>
  );
};
