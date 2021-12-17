import { Definition } from "@nexys/core-list/dist/types";
import React from "react";
import Table from "../../lib/components/table";
import Card from "../../lib/components/card";

interface Data {
  name: string;
}
const def: Definition<Data> = [{ label: "Country Name", name: "name" }];
const def2: Definition<Data> = [
  { label: "Country Name", name: "name", filter: true },
];
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
    <div className="grid grid-cols-2 gap-2">
      <Card title="Table">
        <Table def={def} data={data} />
      </Card>

      <Card title="Table with search">
        <Table def={def2} data={data} config={{ search: true, nPerPage: 3 }} />
      </Card>
    </div>
  );
};
