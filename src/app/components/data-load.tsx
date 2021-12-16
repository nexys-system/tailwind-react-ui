import React from "react";
import * as Utils from "@nexys/utils";
import DataLoad from "../../lib/components/data-load";
import Typography from "../../lib/components/typography";

const wait1s = () => Utils.promise.delay(1000);

export default () => (
  <>
    <Typography variant={"h2"}>Data Load</Typography>
    <DataLoad Component={() => <>Hello</>} getData={wait1s} />
  </>
);
