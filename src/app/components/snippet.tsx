import React from "react";
import * as Snippet from "../../lib/business/snippet";
import Typography from "../../lib/components/typography";

export default () => (
  <>
    <Typography variant="h2">Snippets</Typography>
    <Typography variant="h3">Copy</Typography>
    <Snippet.Copy content={"my content"} />

    <Typography variant="h3">Copy Code Snippet</Typography>
    <Snippet.CopyCodeSnippet content={"my content"} />
  </>
);
