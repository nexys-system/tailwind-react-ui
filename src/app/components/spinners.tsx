import React from "react";
import { CircularLoader, Loader } from "../../lib/components/loader";

export default () => {
  return (
    <>
      <h1>Spinner</h1>
      <Loader />

      <CircularLoader />
    </>
  );
};
