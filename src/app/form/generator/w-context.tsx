import React from "react";
import * as U from "@nexys/utils";
import * as FormGenerator from "../../../lib/components/form/generic/generator";
import {
  FormDef,
  FormType,
} from "@nexys/react-bootstrap/dist/headless/form/type";

import { ContextProvider } from "../../../lib";

const {
  Notification: { Context, Type, Provider },
} = ContextProvider;

type Id = number;
interface Data {
  id: number;
  name: string;
}

const def: FormDef<Data, Id>[] = [
  { name: "name", uiType: FormType.Text, optional: false },
];

export const F = FormGenerator.FormWDef(def);

const FormWContext = () => {
  const { setNotification } = Context.useToastContext();

  const onSuccess = async (d: Data) => {
    await U.promise.delay(2000);

    setNotification({
      text: "success",
      type: Type.NotificationType.toast,
      messageType: Type.MessageType.success,
    });

    return Promise.resolve();
  };

  return <F onSuccess={onSuccess} />;
};

export default () => (
  <Provider>
    <FormWContext />
  </Provider>
);
