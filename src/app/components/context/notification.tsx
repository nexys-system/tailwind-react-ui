import React from "react";

import Typography from "../../../lib/components/typography";
import { ContextProvider } from "../../../lib";

const {
  Notification: { Context, Type, Provider },
} = ContextProvider;

const Notifications = () => {
  const { setNotification } = Context.useToastContext();

  return (
    <>
      <Typography variant="h2">Context</Typography>
      <Typography variant="h3">Toast Example</Typography>

      <button
        type="button"
        onClick={() =>
          setNotification({
            text: "cooool ...",
            type: Type.NotificationType.toast,
            messageType: Type.MessageType.success,
          })
        }
      >
        Click me
      </button>
    </>
  );
};

export default () => (
  <Provider>
    <Notifications />
  </Provider>
);
