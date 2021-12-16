import React from "react";

import Typography from "../../lib/components/typography";

import V from "../../lib/components/view";

import { ViewField } from "@nexys/react-bootstrap/dist/headless/view/type";

interface Data {
  name: string;
}

const viewItems: ViewField<Data>[] = [["Name", "name"]];
export const View = V<Data>(viewItems);

export default () => {
  const data: Data = { name: "my string" };
  return (
    <>
      <Typography variant={"h2"}>View</Typography>
      <View data={data} />
    </>
  );
};
