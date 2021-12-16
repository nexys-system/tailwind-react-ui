import React from "react";

import { Types } from "@nexys/core-list";
import { ListProps } from "@nexys/react-bootstrap/dist/headless/list/type";

import Table from "../table";
import * as UtilsUI from "../utils-ui";

import ListLayout from "./layout";

const getDefWEdit = <A extends { id: Id }, Id>(
  def: Types.Definition<A>,
  editLink?: (id: Id) => string
): Types.Definition<A> => {
  if (!editLink) {
    return def;
  }

  const defEdit: Types.DefinitionItem<A> = {
    name: "id",
    render: (x) => <UtilsUI.EditBtn link={editLink(x.id)} />,
  };

  return [...def, defEdit];
};

const List = <A extends { id: Id }, Id>({
  getData,
  def,
  addLink,
  editLink,
  config,
}: ListProps<A, Id>) => {
  return (
    <ListLayout
      Table={({ data }) => (
        <Table
          data={data}
          def={getDefWEdit<A, Id>(def, editLink)}
          config={config}
        />
      )}
      addLink={addLink}
      getData={getData}
    />
  );
};

export default List;
