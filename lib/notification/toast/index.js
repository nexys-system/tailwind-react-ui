import React from "../../../_snowpack/pkg/react.js";
import ToastUnit from "./unit.js";
import * as Ctx from "../../context-provided/notification/context.js";
import {NotificationType} from "../../context-provided/notification/type.js";
import {mapTypeToTitle} from "../../context-provided/notification/utils.js";
const Toast = () => {
  const {notifications, rmNotification} = Ctx.useToastContext();
  return /* @__PURE__ */ React.createElement("div", {
    "aria-live": "polite",
    "aria-atomic": "true",
    className: `absolute bottom-10 right-5 min-h-40`
  }, /* @__PURE__ */ React.createElement("div", {
    className: "absolut top-0 right-10"
  }, notifications.map((notif, i) => {
    return notif.type === NotificationType.toast && /* @__PURE__ */ React.createElement(ToastUnit, {
      idx: i,
      key: i,
      onDismiss: rmNotification,
      title: mapTypeToTitle(notif.messageType),
      content: notif.text,
      messageType: notif.messageType,
      timestring: ""
    });
  })));
};
export default Toast;
