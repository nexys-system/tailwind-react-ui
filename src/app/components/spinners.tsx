import React from "react";
import { CircularLoader, Loader, Circle } from "../../lib/components/spinner";
import Typography from "../../lib/components/typography";

export default () => {
  return (
    <>
      <Typography variant={"h2"}>Spinner</Typography>
      <Loader />

      <CircularLoader />
      <Circle />
    </>
  );
};
