import React from "react";

import Typography from "../../../lib/components/typography";

import Simple from "./simple";
import FormWContext from "./w-context";

export default () => (
  <>
    <Typography variant="h2">Form Generator</Typography>
    <Typography variant="h3">simple</Typography>
    <Simple />

    <Typography variant="h3">with context</Typography>

    <FormWContext />

    <Typography variant="h3">
      with context and (partial) default values
    </Typography>

    <FormWContext
      valueDefault={{ age: 9, isAccept: true, cat: 3, catObject: { id: 2 } }}
    />
  </>
);
