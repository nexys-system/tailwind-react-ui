import React from "../../../../_snowpack/pkg/react.js";
import * as Ctx from "../../../context-provider/notification/context.js";
import BannerUI from "./ui.js";
import {
  NotificationType
} from "../../../context-provider/notification/type.js";
import {mapTypeToColor} from "../../../context-provider/notification/utils.js";
const Banner = () => {
  const {notifications, rmNotification} = Ctx.useToastContext();
  return /* @__PURE__ */ React.createElement(React.Fragment, null, notifications.map((banner, i) => banner.type === NotificationType.banner && /* @__PURE__ */ React.createElement(BannerUI, {
    key: i,
    label: banner.text,
    onDismiss: () => rmNotification(i),
    isHtml: true,
    color: mapTypeToColor(banner.messageType)
  })));
};
export default Banner;
