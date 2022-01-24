import React from "react";
import Badge from "../../lib/components/badges/main";
import * as C from "../../lib/components/type";
import PropList from "./props-list";
import { Internal as Link } from "../../lib/components/link";

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
      <br />

      <PropList
        data={[
          {
            id: 1,
            name: "color",
            mandatory: true,
            description: (
              <span>
                See <Link url="/color">Colors </Link>
              </span>
            ),
          },
          {
            id: 2,
            name: "rounded",
            mandatory: false,
            description: (
              <span>
                See <Link url="/radius">Border Radius </Link>
              </span>
            ),
          },
          {
            id: 3,
            name: "children",
            description: "Content of the badge",
            mandatory: true,
          },
        ]}
      />
    </>
  );
};
