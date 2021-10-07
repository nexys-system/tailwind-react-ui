import React from "react";
import Alert from "../../lib/components/alerts/main";
import { Speakerphone } from "../../lib/icons";

import * as C from "../../lib/components/type";

export default () => {
  return (
    <>
      <h1>Alert</h1>
      <Alert>Primary alert (default)</Alert>
      <Alert color={C.ContextColor.secondary}>Secondary alert</Alert>
      <Alert color={C.ContextColor.info}>Info alert</Alert>
      <Alert color={C.ContextColor.success}>Success alert</Alert>
      <Alert color={C.ContextColor.warning}>Warning alert</Alert>
      <Alert color={C.ContextColor.error}>Error alert</Alert>
      <Alert>
        <p>
          <b>HTML</b> <i>text</i>
        </p>
      </Alert>
      <Alert Icon={Speakerphone}>With icon</Alert>
      <Alert Icon={Speakerphone} dismissible>
        with dismissible
      </Alert>
    </>
  );
};
