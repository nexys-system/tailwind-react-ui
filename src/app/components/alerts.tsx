import React from "react";
import Alert from "../../lib/components/alert";
import { Check } from "../../lib/icons";

export default () => {
  return (
    <>
      <h1>Alert</h1>
      <Alert>Simple alert</Alert>
      <Alert>
        <p>
          <b>HTML</b> <i>text</i>
        </p>
      </Alert>
      <Alert Icon={Check}>With icon</Alert>
      <Alert Icon={Check} dismissible>
        with dismissible
      </Alert>
    </>
  );
};
