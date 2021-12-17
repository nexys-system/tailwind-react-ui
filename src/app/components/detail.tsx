import React from "react";

import Typography from "../../lib/components/typography";
import Detail from "../../lib/components/detail";

import { F } from "../form/generator/simple";

import V from "../../lib/components/view";

import { ViewField } from "@nexys/react-bootstrap/dist/headless/view/type";
import { ContextProvider } from "../../lib";

const {
  Notification: { Context, Type },
} = ContextProvider;

interface Data {
  id: number;
  name: string;
}

export const viewItems: ViewField<Data>[] = [["Name", "name"]];
export const View = V<Data>(viewItems);

interface Data {
  id: number;
  name: string;
}

const redirectUrl = "/";

const d1: Data = { id: 1, name: "my daa" };

const DwNotif = () => {
  const { setNotification } = Context.useToastContext();

  const D = Detail<number, Data>(
    F,
    viewItems,
    {
      detail: (_id: number) => {
        console.log("gt data");
        return Promise.resolve(d1);
      },
      update: () => {
        setNotification({
          text: "hello",
          type: Type.NotificationType.toast,
          messageType: Type.MessageType.info,
        });
        return Promise.resolve();
      },
    },
    redirectUrl,
    true,
    12,
    undefined,
    "my edit title"
  );

  return <D id={1} />;
};

export default () => {
  return (
    <>
      <Typography variant="h2">Detail</Typography>
      <DwNotif />
    </>
  );
};
