import React from "react";
import Badge from "../../lib/components/badges/main";
import * as C from "../../lib/components/type";

export default () => {
  return (
    <>
      <h1>Badge</h1>
      <Badge>Primary badge (default)</Badge>
      <br />
      <Badge color={C.ContextColor.secondary}>Secondary badge</Badge>
      <br />
      <Badge color={C.ContextColor.info}>Info badge</Badge>
      <br />
      <Badge color={C.ContextColor.success}>Success badge</Badge>
      <br />
      <Badge color={C.ContextColor.warning}>Warning badge</Badge>
      <br />
      <Badge color={C.ContextColor.error}>Error badge</Badge>
      <br />
    </>
  );
};
