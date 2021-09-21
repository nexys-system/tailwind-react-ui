import React, { useState } from "react";

import * as Inputs from "../../lib/form/inputs";
import { OptionSet } from "../../lib/form/type";

import Wrapper from "../../lib/form/wrapper";

const options = [
  { id: 1, name: "Option 1" },
  { id: 2, name: "Option 2" },
];

const Scalar = () => {
  const [value, setValue] = useState<number | undefined>();

  return (
    <>
      <Wrapper label="Select">
        <Inputs.Select.Scalar
          value={value}
          onChange={(v) => setValue(v)}
          options={options}
        />
      </Wrapper>

      <code>{JSON.stringify(value)}</code>
    </>
  );
};

const SelectObject = () => {
  const [value, setValue] = useState<OptionSet<number> | undefined>();

  return (
    <>
      <Wrapper label="Select Object">
        <Inputs.Select.Object
          value={value}
          onChange={(v) => setValue(v)}
          options={options}
        />
      </Wrapper>

      <code>{JSON.stringify(value)}</code>
    </>
  );
};

export default () => {
  return (
    <div className="font-extralight">
      <Scalar />
      <hr />
      <SelectObject />
    </div>
  );
};
