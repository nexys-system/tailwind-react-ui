import React from "react";

import Typography from "../../lib/components/typography";
import Toggle from "../../lib/components/toggle";
import { Edit } from "./edit";
import { View } from "./view";

type Id = string;
interface Data {
  name: string;
}

const T = Toggle<Data, Id>(Edit, View);

export default () => {
  const data: Data = { name: "my string" };
  return (
    <>
      <Typography variant="h2">Toggle</Typography>
      <T id={"2"} data={data} />
    </>
  );
};
