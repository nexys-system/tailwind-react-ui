import React from "react";
import Alert from "../../lib/components/alert";
import { Check, XCircle } from "../../lib/icons";

export default () => {
  return (
    <>
      <h1>Alert</h1>
      <Alert>gfd</Alert>
      <Alert Icon={Check}>gfd 2</Alert>
      <Alert Icon={Check} dismissible>
        gfd 2
      </Alert>
    </>
  );
};
