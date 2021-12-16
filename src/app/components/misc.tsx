import React from "react";
import Typography from "../../lib/components/typography";
import * as U from "../../lib/utils";
export default () => {
  return (
    <>
      <Typography variant="h2">Miscellaneous</Typography>{" "}
      <Typography variant="h3">Save content to file</Typography>
      <button
        type="button"
        onClick={() =>
          U.saveByteArray("myfile.txt", "hello world", "plain/text")
        }
      >
        Click me!
      </button>
    </>
  );
};
