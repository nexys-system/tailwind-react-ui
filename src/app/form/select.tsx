import React, { useState } from "react";

import * as Inputs from "../../lib/form/inputs";
import { OptionSet } from "../../lib/form/type";
import Wrapper from "../../lib/form/wrapper";

const options = [
  { id: 1, name: "Option 1" },
  { id: 2, name: "Option 2" },
];

export default () => {
  const [value, setValue] = useState<OptionSet<number> | undefined>();

  return (
    <div className="font-extralight">
      <Wrapper label="Select">
        <Inputs.Select
          value={value}
          onChange={(v) => setValue(v)}
          options={options}
        />
      </Wrapper>

      <code>{JSON.stringify(value)}</code>
    </div>
  );
};
