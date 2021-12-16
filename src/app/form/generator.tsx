import React from "react";

import Typography from "../../lib/components/typography";
import * as FormGenerator from "../../lib/components/form/generic/generator";
import {
  FormDef,
  FormType,
} from "@nexys/react-bootstrap/dist/headless/form/type";

type Id = number;
interface Data {
  name: string;
}

const def: FormDef<Data, Id>[] = [
  { name: "name", uiType: FormType.Text, optional: false },
];
const F = FormGenerator.FormWDef(def);

const onSuccess = (d: Data) => {
  alert(JSON.stringify(d));
  return Promise.resolve();
};

export default () => {
  return (
    <>
      <Typography>Form Generator</Typography>
      <F onSuccess={onSuccess} />
    </>
  );
};
