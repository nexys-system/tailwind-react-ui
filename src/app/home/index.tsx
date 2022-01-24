import React from "react";

import { External } from "../../lib/components/link";
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
      <h1 className={"text-2xl text-primary py-2"}>React Tailwind UI</h1>
      <p>Collection of React components for tailwind.</p>

      <h3 className={"text-xl text-primary py-2"}>Get Started</h3>

      <Statement
        code={"yarn add @nexys/tailwind-react-ui"}
        copyToClipboard={true}
      />

      <h3 className={"text-xl text-primary py-2"}>Resources</h3>

      <p>
        <External url={"https://github.com/nexys-system/tailwind-react-ui"}>
          <>
            <GitHub svgProps={{ stroke: "none", fill: "black" }} /> Github
            repository
          </>
        </External>
      </p>

      <ul className={"flex items-stretch "}>
        {badges.map((badge, i) => (
          <li key={i} className={"p-1"}>
            <External url={badge[1]}>
              <img src={badge[0]} />
            </External>
          </li>
        ))}
      </ul>

      <h3 className={"text-xl text-blue-500 py-2"}>Links</h3>
      <ul>
        <li>
          Tailwind official website:{" "}
          <External url={"https://tailwindcss.com/"}>
            https://tailwindcss.com/
          </External>
        </li>
      </ul>
    </>
  );
};
