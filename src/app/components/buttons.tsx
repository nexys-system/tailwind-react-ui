import React from "react";
import Button from "../../lib/components/buttons/main";

export default () => {
  return (
    <>
      <h1>Button</h1>
      <Button>Simple</Button>

      <Button isLoading={true}>hello</Button>
    </>
  );
};
