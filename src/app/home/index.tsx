import React from "react";

import AHref from "../../lib/components/link";
import { Statement } from "../../lib/components/code";
import { GitHub } from "../../lib/icons";

const badges = [
  [
    "https://badge.fury.io/js/%40nexys%2Ftailwind-react-ui.svg",
    "https://www.npmjs.com/package/@nexys/tailwind-react-ui",
  ],
  [
    "https://img.shields.io/npm/v/@nexys/tailwind-react-ui.svg",
    "https://www.npmjs.com/package/@nexys/tailwind-react-ui",
  ],
];

export default () => {
  return (
    <>
      <h1 className={"text-2xl text-blue-500 py-2"}>React Tailwind UI</h1>
      <p>Collection of React components for tailwind.</p>

      <h3 className={"text-xl text-blue-500 py-2"}>Get Started</h3>

      <Statement
        code={"yarn add @nexys/tailwind-react-ui"}
        copyToClipboard={true}
      />

      <h3 className={"text-xl text-blue-500 py-2"}>Resources</h3>

      <p>
        <AHref link={"https://github.com/nexys-system/tailwind-react-ui"}>
          <>
            <GitHub /> Github repository
          </>
        </AHref>
      </p>

      <ul className={"flex items-stretch "}>
        {badges.map((badge, i) => (
          <li key={i} className={"p-1"}>
            <AHref target={"_blank"} link={badge[1]}>
              <img src={badge[0]} />
            </AHref>
          </li>
        ))}
      </ul>

      <h3 className={"text-xl text-blue-500 py-2"}>Links</h3>
      <ul>
        <li>
          Tailwind official website:{" "}
          <AHref link={"https://tailwindcss.com/"}>
            https://tailwindcss.com/
          </AHref>
        </li>
      </ul>
    </>
  );
};
