import React, { useState } from "react";

import * as Inputs from "../../lib/form/inputs";
import Wrapper from "../../lib/form/wrapper";

export default () => {
  const [nv, setNv] = useState<number>(0);
  const [tv, setTv] = useState<string>("");
  const [sv, setSv] = useState<{ id: number; name: string }>({
    id: 1,
    name: "Option 1",
  });
  const [swV, setSwV] = useState<boolean | undefined>(undefined);
  return (
    <div className="font-extralight">
      <Wrapper label="Numeric input">
        <Inputs.Number value={nv} onChange={(v) => setNv(v)} />
      </Wrapper>
      <Wrapper label="Text input">
        <Inputs.Text value={tv} onChange={(v) => setTv(v)} />
      </Wrapper>
      <Wrapper label="Select">
        <Inputs.Select
          value={sv}
          onChange={(v) => setSv(v)}
          options={[
            { id: 1, name: "Option 1" },
            { id: 2, name: "Option 2" },
          ]}
        />
      </Wrapper>
      <Wrapper label="Switch" inputType="switch">
        <Inputs.Switch value={swV} onChange={(v) => setSwV(v)} />
      </Wrapper>
    </div>
  );
};
