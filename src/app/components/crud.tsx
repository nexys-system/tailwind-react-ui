import React from "react";

import Typography from "../../lib/components/typography";

import CRUD from "../../lib/components/crud";
import { Definition } from "@nexys/core-list/dist/types";
import {
  FormDef,
  FormType,
} from "@nexys/react-bootstrap/dist/headless/form/type";
import { ViewField } from "@nexys/react-bootstrap/dist/headless/view/type";
import countries, { Country } from "./list/countries";

const def: Definition<Country> = [{ name: "name" }];

const defDetail: FormDef<Country>[] = [
  { name: "name", uiType: FormType.Text, optional: false },
];

const viewFields: ViewField<Country>[] = [["Name", "name"]];

const urlPrefix = "/crud";

const crud = {
  list: () => {
    return Promise.resolve(countries);
  },
  detail: (id: number) => Promise.resolve(countries[id]),
};

const C = CRUD<Country, number>(def, defDetail, viewFields, urlPrefix, crud);

export default () => {
  return (
    <>
      <Typography variant="h2">CRUD</Typography>
      <C />
    </>
  );
};
