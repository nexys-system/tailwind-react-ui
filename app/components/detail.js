import React from "../../_snowpack/pkg/react.js";
import Typography from "../../lib/components/typography.js";
import Detail from "../../lib/components/detail/index.js";
import {F} from "../form/generator/simple.js";
import V from "../../lib/components/view/index.js";
import {ContextProvider} from "../../lib/index.js";
const {
  Notification: {Context, Type}
} = ContextProvider;
export const viewItems = [["Name", "name"]];
export const View = V(viewItems);
const redirectUrl = "/";
const d1 = {id: 1, name: "my daa"};
const DwNotif = () => {
  const {setNotification} = Context.useToastContext();
  const D = Detail(F, viewItems, {
    detail: (_id) => {
      console.log("gt data");
      return Promise.resolve(d1);
    },
    update: () => {
      setNotification({
        text: "hello",
        type: Type.NotificationType.toast,
        messageType: Type.MessageType.info
      });
      return Promise.resolve();
    }
  }, redirectUrl, true, 12, void 0, "my edit title");
  return /* @__PURE__ */ React.createElement(D, {
    id: 1
  });
};
export default () => {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Typography, {
    variant: "h2"
  }, "Detail"), /* @__PURE__ */ React.createElement(DwNotif, null));
};
