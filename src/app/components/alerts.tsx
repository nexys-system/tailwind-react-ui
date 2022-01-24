import React from "react";
import Alert from "../../lib/components/alerts/main";
import { Internal as Link } from "../../lib/components/link";
import { Speakerphone } from "../../lib/icons";

import * as C from "../../lib/components/type";
import Typography from "../../lib/components/typography";
import PropList from "./props-list";

export default () => {
  return (
    <>
      <Typography variant="h2">Alerts</Typography>

      <p className="my-5">
        Alert is a surface component to communicate some important information
        to the user.
        <br />
      </p>
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
            description: "Content of the alert",
            mandatory: true,
          },
          {
            id: 4,
            name: "Icon",
            description: "Optional icon in front of the alert",
          },
          {
            id: 5,
            name: "dismissible",
            description:
              "Indicates if it should be possible to dismiss the alser",
          },
          { id: 6, name: "onClick", description: "On click handler" },
        ]}
      />
      <br />
    </>
  );
};
