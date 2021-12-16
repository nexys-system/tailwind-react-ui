import React from "react";

import Typography from "../../../lib/components/typography";
import * as FormGenerator from "../../../lib/components/form/generic/generator";
import {
  FormDef,
  FormType,
} from "@nexys/react-bootstrap/dist/headless/form/type";

import FormWContext from "./w-context";

type Id = number;
interface Data {
  id: number;
  name: string;
}

const def: FormDef<Data, Id>[] = [
  { name: "name", uiType: FormType.Text, optional: false },
];

export const F = FormGenerator.FormWDef(def);

const onSuccess = (d: Data) => {
  alert(JSON.stringify(d));
  return Promise.resolve();
};

export default () => {
  return (
    <>
      <Typography variant="h2">Form Generator</Typography>
      <Typography variant="h3">simple</Typography>
      <F onSuccess={onSuccess} />

      <Typography variant="h3">with context</Typography>

      <FormWContext />
    </>
  );
};
