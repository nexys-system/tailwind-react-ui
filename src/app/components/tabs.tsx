import React from "react";
import * as Tabs from "../../lib/components/tabs";
import Typography from "../../lib/components/typography";

const navs = [
  { name: "Option #1" },
  { name: "Option #2" },
  { name: "Option #3" },
  { name: "Option #4" },
];
const T = Tabs.Simple(navs);

const navs2: { name: string; Component: JSX.Element }[] = [1, 2, 3, 4].map(
  (i) => ({
    name: "C" + i,
    Component: <p>component {i}</p>,
  })
);

const navs3 = [
  {
    label: "first",
    link: "",
    Component: () => <p>First Component</p>,
  },
  {
    label: "second",
    link: "/second",
    Component: () => <p>Second component</p>,
  },
];

export default () => {
  return (
    <>
      <Typography variant={"h2"}>Tabs</Typography>
      <Typography variant={"h3"}>Simple</Typography>
      <T onClick={(v) => alert("click " + v)} />

      <Typography variant={"h3"}>Swap Components</Typography>
      <Tabs.SwapComponent navs={navs2} />
      <Typography variant={"h3"}>Tabs with Router</Typography>
      <Tabs.WRouter navs={navs3} urlPrefix="/tabs" />
    </>
  );
};
