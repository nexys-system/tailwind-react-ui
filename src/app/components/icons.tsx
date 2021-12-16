import React from "react";

import * as Icons from "../../lib/icons";
import AHref from "../../lib/components/link";

export default () => {
  const [showClipboard, setClipboard] = React.useState<string | undefined>();

  const handleClick = async (name: string) => {
    const codeString = `import { ${name} as ${name}Icon } from '@nexys/tailwind-react-ui/dist/icons'`;

    await navigator.clipboard.writeText(codeString);
    alert(`Code for "${name}" copied`);
  };

  return (
    <>
      <h1 className={"p-2 text-2xl"}>Icons</h1>

      <p>
        Source: <AHref link={"https://heroicons.com/"}>Heroicons</AHref>
      </p>

      <ul>
        {Object.entries(Icons)
          .sort(([k1], [k2]) => k1.localeCompare(k2))
          .map(([k, V]) => (
            <li key={k} onClick={() => handleClick(k)}>
              <V />{" "}
              <code
                onMouseOver={() => setClipboard(k)}
                onMouseOut={() => setClipboard(undefined)}
                className={" cursor-pointer text-red-500 hover:text-red-800"}
              >
                {k}
                &nbsp;
                {showClipboard === k && <Icons.Clipboard />}
              </code>
            </li>
          ))}
      </ul>
    </>
  );
};
