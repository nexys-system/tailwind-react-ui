import React from "react";

import ToastUnit from "./unit";
import * as Ctx from "../../context-provided/notification/context";
import { NotificationType } from "../../context-provided/notification/type";
import { mapTypeToTitle } from "../../context-provided/notification/utils";

const Toast = () => {
  const { notifications, rmNotification } = Ctx.useToastContext();

  // const toasts: ToastProp[] = notifications
  //   .filter((x) => x.type === NotificationType.toast)
  //   .map((x) => {
  //     return {
  //       title: mapTypeToTitle(x.messageType),
  //       content: x.text,
  //       timestring: "",
  //       messageType: x.messageType,
  //     };
  //   });

  return (
    <div
      aria-live="polite"
      aria-atomic="true"
      className={`absolute bottom-10 right-5 min-h-40`}
    >
      <div className="absolut top-0 right-10">
        {notifications.map((notif, i) => {
          return (
            notif.type === NotificationType.toast && (
              <ToastUnit
                idx={i}
                key={i}
                onDismiss={rmNotification}
                title={mapTypeToTitle(notif.messageType)}
                content={notif.text}
                messageType={notif.messageType}
                timestring=""
              />
            )
          );
        })}
        {/* {toasts.map((t, i) => (
          <ToastUnit key={i} idx={i} onDismiss={rmNotification} {...t} />
        ))} */}
      </div>
    </div>
  );
};

export default Toast;
