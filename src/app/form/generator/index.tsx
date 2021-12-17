import React from "react";

import Typography from "../../../lib/components/typography";

import Simple from "./simple";
import FormWContext from "./w-context";
import Card from "../../../lib/components/card";

export default () => (
  <>
    <Typography variant="h2">Form Generator</Typography>

    <div className="w-1/2">
      <Card title="Simple">
        <Simple />
      </Card>

      <Card title="with context">
        <FormWContext />
      </Card>
      <Card title="with context and (partial) default values">
        <FormWContext
          valueDefault={{
            age: 9,
            isAccept: true,
            cat: 3,
            catObject: { id: 2 },
          }}
        />
      </Card>
    </div>
  </>
);
