import React from "../../../_snowpack/pkg/react.js";
import Typography from "../../../lib/components/typography.js";
import {ContextProvider} from "../../../lib/index.js";
const {
  Notification: {Context, Type, Provider}
} = ContextProvider;
const Notifications = () => {
  const {setNotification} = Context.useToastContext();
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Typography, {
    variant: "h2"
  }, "Context"), /* @__PURE__ */ React.createElement(Typography, {
    variant: "h3"
  }, "Toast Example"), /* @__PURE__ */ React.createElement("button", {
    type: "button",
    onClick: () => setNotification({
      text: "cooool ...",
      type: Type.NotificationType.toast,
      messageType: Type.MessageType.success
    })
  }, "Click me"));
};
export default () => /* @__PURE__ */ React.createElement(Provider, null, /* @__PURE__ */ React.createElement(Notifications, null));
