import React from "react";

import Grid from "../../components/grid";
import Card from "../../components/card";
import { ExtraUnit } from "../crud/type";

import { ToggleProps } from "./type";
import Toggle from "../form/toggle/ui";
import GridWTabs from "../../components/grid/w-tabs";
import { CardComponent, Tab } from "../../components/grid/w-tabs/type";

// todo here use the "detail" component, see in example

export const ComponentGrid = <A,>({
  data,
  urlPrefix,
  extraComponents = [],
  ...toggleProps
}: {
  extraComponents?: ExtraUnit<A>[];
  urlPrefix: string;
} & ToggleProps<A>) => {
  const tabs: string[] = [];

  extraComponents.forEach((c) => {
    if (c.tab) {
      tabs.push(c.tab);
    }
  });

  if (tabs.length > 0) {
    const tabsWComponent: Tab<A>[] = [undefined, ...tabs].map((tabString) => {
      const cards: CardComponent<A>[] = extraComponents
        .filter((x) => x.tab === tabString)
        .map((e) => {
          return { Component: e.Component, title: e.title || "" };
        });

      if (!tabString) {
        cards.unshift({
          title: "Main",
          Component: ({ data }: { data: A }) => (
            <Toggle data={data} {...toggleProps} />
          ),
        });
      }

      return {
        label: tabString || "Detail",
        link: tabString ? labelToLink(tabString) : "",
        cards,
      };
    });

    return (
      <GridWTabs items={tabsWComponent} data={data} urlPrefix={urlPrefix} />
    );
  }

  return (
    <Grid n={2}>
      <>
        <Toggle data={data} {...toggleProps} />
        {extraComponents.map((C, i) =>
          C.paper === false ? (
            <div
              className={` ${
                C.colSpan ? "col-span-" + C.colSpan : "col-span-1"
              }`}
            >
              <C.Component data={data} />
            </div>
          ) : (
            <Card
              key={i}
              title={C.title}
              className={`overflow-scroll ${
                C.colSpan ? "col-span-" + C.colSpan : "col-span-1"
              }`}
            >
              <C.Component data={data} />
            </Card>
          )
        )}
      </>
    </Grid>
  );
};

const labelToLink = (l: string) => "/" + l.toLowerCase();

export default ComponentGrid;
