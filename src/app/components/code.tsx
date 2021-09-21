import React from "react";

import { Statement } from "../../lib/components/code";

export default () => {
  return (
    <>
      <h1>Code</h1>
      <Statement code={"yarn add @nexys/tailwind-react-ui"} />

      <h3>with copy</h3>
      <Statement
        code={"yarn add @nexys/tailwind-react-ui"}
        copyToClipboard={true}
      />
    </>
  );
};
