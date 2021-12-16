import React from "react";
import data, { Country } from "./countries";
import List from "../../../lib/components/list";
import Typography from "../../../lib/components/typography";
import { Definition } from "@nexys/core-list/dist/types";

const def: Definition<Country> = [
  { label: "Country Name", name: "name" },
  { label: "Population", name: "population" },
  { label: "Area", name: "area" },
];

const getData = (): Promise<Country[]> => Promise.resolve(data);

export default () => (
  <>
    <Typography variant={"h2"}>List</Typography>
    <List<Country, number>
      config={{ search: false }}
      def={def}
      getData={getData}
    />
  </>
);
