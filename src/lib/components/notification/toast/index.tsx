import React from "react";

import ToastUnit from "./unit";
import * as Ctx from "../../../context-provider/notification/context";
import { NotificationType } from "../../../context-provider/notification/type";
import { mapTypeToTitle } from "../../../context-provider/notification/utils";

const Toast = () => {
  const { notifications, rmNotification } = Ctx.useToastContext();

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
