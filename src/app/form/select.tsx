import React, { useState } from "react";

import * as Inputs from "../../lib/form/inputs";
import Wrapper from "../../lib/form/wrapper";

export default () => {
  const [sv, setSv] = useState<{ id: number; name: string }>({
    id: 1,
    name: "Option 1",
  });

  return (
    <div className="font-extralight">
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
    </div>
  );
};
