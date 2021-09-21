import React from "react";
import * as Ctx from "../../context-provided/notification/context";

import BannerUI from "./ui";

import {
  NotificationType,
  MessageType,
} from "../../context-provided/notification/type";
import { mapTypeToColor } from "../../context-provided/notification/utils";

interface Banner {
  text: string;
  isHtml?: boolean;
  messageType: MessageType;
}

const Banner = () => {
  const { notifications, rmNotification } = Ctx.useToastContext();

  return (
    <>
      {notifications.map(
        (banner, i) =>
          banner.type === NotificationType.banner && (
            <BannerUI
              key={i}
              label={banner.text}
              onDismiss={() => rmNotification(i)}
              isHtml={true}
              color={mapTypeToColor(banner.messageType)}
            />
          )
      )}
    </>
  );
};

export default Banner;
