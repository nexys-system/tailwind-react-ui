import React from "react";

import WLoader from "../data-load";
import * as UtilsUi from "../utils-ui";

const ListLayout = <A,>({
  Table,
  getData,
  addLink,
}: {
  Table: ({ data }: { data: A[] }) => JSX.Element;
  getData: () => Promise<A[]>;
  addLink?: string;
}) => (
  <>
    {addLink && <UtilsUi.LinkAdd link={addLink} />}
    <WLoader getData={getData} Component={Table} />
  </>
);

export default ListLayout;
