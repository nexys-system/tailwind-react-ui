import React from "react";

import List from "../../lib/components/table";
import * as T from "@nexys/core-list/dist/types/definition";
import * as Icons from "../../lib/icons";
import Card from "../../lib/components/card";

interface Prop {
  id: number;
  name: string;
  description: string | JSX.Element;
  mandatory?: boolean;
}

interface Props {
  data: Prop[];
}

export default (props: Props) => {
  const def: T.DefinitionItem<Prop>[] = [
    { name: "name", label: "Prop name", render: (c) => <code>{c.name}</code> },
    {
      name: "mandatory",
      label: "Mandatory",
      render: (c) =>
        c.mandatory ? (
          <Icons.Check className="text-success" />
        ) : (
          <Icons.Close className="text-error" />
        ),
    },
    { name: "description", title: "Description" },
  ];
  return (
    <Card title="Properties">
      <List def={def} data={props.data} config={{ search: false }} />
    </Card>
  );
};
