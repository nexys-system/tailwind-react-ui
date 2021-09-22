import { Definition } from "@nexys/core-list/dist/types";
import React from "react";
import Table from "../../lib/components/table";

interface Data {
  name: string;
}
const def: Definition<Data> = [{ label: "Country Name", name: "name" }];
const data = [
  { name: "France" },
  { name: "Switzerland" },
  { name: "Germany" },
  { name: "Italy" },
  { name: "Belgium" },
  { name: "Spain" },
];

export default () => {
  return (
    <>
      <h1 className={"text-xl p-1"}>Table</h1>
      <Table def={def} data={data} />

      <h1 className={"text-xl p-1"}>Table with filter</h1>
      <Table def={def} data={data} config={{ search: true, nPerPage: 3 }} />
    </>
  );
};