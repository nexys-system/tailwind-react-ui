import React from "react";

import Typography from "../../lib/components/typography";
import Detail from "../../lib/components/detail";

import { F } from "../form/generator";

import V from "../../lib/components/view";

import { ViewField } from "@nexys/react-bootstrap/dist/headless/view/type";

interface Data {
  id: number;
  name: string;
}

export const viewItems: ViewField<Data>[] = [["Name", "name"]];
export const View = V<Data>(viewItems);

interface Data {
  id: number;
  name: string;
}

const redirectUrl = "/";

const d1: Data = { id: 1, name: "my daa" };

const D = Detail<number, Data>(
  F,
  viewItems,
  {
    detail: (_id: number) => Promise.resolve(d1),
    update: () => Promise.resolve(),
  },
  redirectUrl,
  true,
  12,
  undefined,
  "my edit title"
);

export default () => {
  return (
    <>
      <Typography variant="h2">Detail</Typography>
      <D id={1} />
    </>
  );
};
