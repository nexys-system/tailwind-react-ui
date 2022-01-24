import React from "react";

import { Statement, Block } from "../../lib/components/code";
import Typography from "../../lib/components/typography";

export default () => {
  return (
    <>
      <Typography variant={"h2"}>Code</Typography>
      <p>Formatted code extract</p>

      <Statement code={"yarn add @nexys/tailwind-react-ui"} />

      <p>with copy</p>
      <Statement
        code={"yarn add @nexys/tailwind-react-ui"}
        copyToClipboard={true}
      />
      <br />
      <br />
      <Typography variant={"h4"}>Code block</Typography>
      <Block
        code={`td > code {
  background: #ffeff0;
  word-wrap: break-word;
  box-decoration-break: clone;
  padding: .1rem .3rem .2rem;
  border-radius: .2rem;
}`}
      />
    </>
  );
};
