import { Definition } from "@nexys/core-list/dist/types";
import React from "react";
import Table from "../../lib/components/table";

interface Data {
  name: string;
}
const def: Definition<Data> = [{ label: "Country Name", name: "name" }];
const data = [{ name: "France" }];

export default () => {
  return (
    <>
      <h1 className={"text-xl p-1"}>Table</h1>
      <Table def={def} data={data} />
    </>
  );
};
