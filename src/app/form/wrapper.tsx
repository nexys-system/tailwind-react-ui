import React from "react";
import Typography from "../../lib/components/typography";
import * as Wrappers from "../../lib/components/form/wrapper";

export default () => {
  return (
    <>
      <Typography variant="h2">Form Wrapper</Typography>
      <Wrappers.Group label={"My label"}>
        <>inside of the wrapper</>
      </Wrappers.Group>

      <Wrappers.Group label={"My label"} errors={["error #1", "error #2"]}>
        <>inside of the wrapper</>
      </Wrappers.Group>

      <Wrappers.Group label={"My label"} info="additional information">
        <>inside of the wrapper</>
      </Wrappers.Group>
    </>
  );
};
