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

enum DataCategory {
  one = 1,
  two = 2,
  three = 3,
}

const isA = <A,>(x: any): x is A => typeof x === "number";

const dataCategoryOptions = Object.values(DataCategory)
  .filter(isA)
  .map((id) => ({ id: id as number, name: DataCategory[id] }));

interface Data {
  name: string;
  age: number;
  cat: DataCategory;
  catObject: { id: number };
  isAccept: boolean;
}

const def: FormDef<Data, Id>[] = [
  { label: "Name", name: "name", uiType: FormType.Text, optional: false },
  { name: "age", label: "Age", uiType: FormType.Number, optional: false },
  {
    name: "cat",
    label: "Category",
    uiType: FormType.Select,
    optional: false,
    options: dataCategoryOptions,
  },
  {
    name: "catObject",
    label: "Category 2",
    uiType: FormType.SelectObject,
    optional: false,
    options: [
      { id: 1, name: "cat #1" },
      { id: 2, name: "cat #2" },
    ],
  },
  {
    name: "isAccept",
    label: "Accept conditions",
    uiType: FormType.Switch,
    optional: false,
  },
];

export const F = FormGenerator.FormWDef(def);

const FormWContext = ({
  valueDefault = {},
}: {
  valueDefault: Partial<Data>;
}) => {
  const [isLoading, setLoading] = React.useState<boolean>(false);
  const { setNotification } = Context.useToastContext();

  const onSuccess = async (d: Data) => {
    setLoading(true);
    await U.promise.delay(2000);

    setNotification({
      text: "success",
      type: Type.NotificationType.toast,
      messageType: Type.MessageType.success,
    });

    setLoading(false);
    return Promise.resolve();
  };

  return (
    <F
      valueDefault={valueDefault}
      onSuccess={onSuccess}
      isLoading={isLoading}
    />
  );
};

export default ({ valueDefault }: { valueDefault?: Partial<Data> }) => (
  <Provider>
    <FormWContext valueDefault={valueDefault} />
  </Provider>
);
