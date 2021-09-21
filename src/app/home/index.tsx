import React from "react";

import AHref from "../../lib/components/link";

export default () => {
  return (
    <>
      <h1 className={"text-2xl text-blue-500 py-2"}>React Tailwind UI</h1>
      <p>Collection of React components for tailwind.</p>

      <p>
        <AHref link={"https://github.com/nexys-system/tailwind-react-ui"}>
          Github repository
        </AHref>
      </p>

      <p>
        <AHref
          target={"_blank"}
          link={"https://www.npmjs.com/package/@nexys/tailwind-react-ui"}
        >
          <img
            src={"https://badge.fury.io/js/%40nexys%2Ftailwind-react-ui.svg"}
          />
        </AHref>
        &nbsp;
        <AHref
          target={"_blank"}
          link={"https://www.npmjs.com/package/@nexys/tailwind-react-ui"}
        >
          <img
            src={"https://img.shields.io/npm/v/@nexys/tailwind-react-ui.svg"}
          />
        </AHref>
      </p>

      <h3 className={"text-xl text-blue-500 py-2"}>Resources</h3>
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
