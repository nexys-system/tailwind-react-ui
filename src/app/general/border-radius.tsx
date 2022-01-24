import React from "react";

import * as C from "../../lib/components/type";
import Typography from "../../lib/components/typography";
import { Block, Statement } from "../../lib/components/code";
/**
 * primary: {
          ...colors.sky,
          DEFAULT: colors.sky["500"],
        },
        secondary: {
          ...colors.gray,
          DEFAULT: colors.gray["500"],
        },
        success: {
          ...colors.green,
          DEFAULT: colors.green["500"],
        },
        warning: {
          ...colors.amber,
          DEFAULT: colors.amber["500"],
        },
        error: {
          ...colors.rose,
          DEFAULT: colors.rose["500"],
        },
        info: {
          ...colors.blue,
          DEFAULT: colors.blue["500"],
        },

 */
export default () => {
  return (
    <>
      <Typography variant="h2">Border radius</Typography>

      <p className="my-5">
        Border radius can be defined for a scope of components together (via
        tailwind config), or individually for each component which has this
        property
      </p>
      <div className="grid grid-cols-6 gap-3">
        {["none", "sm", "md", "lg", "full"].map((c) => {
          return (
            <div className={`bg-primary rounded-${c} px-5 py-3 text-white`}>
              {c}
            </div>
          );
        })}
      </div>
      <br />
      <p>
        To define the border radius for a component once, the following classes
        need to be provided in <code>tailwind.config.js</code>:<br />
        <br />
        <ol>
          <li className="ml-5">
            <strong>button</strong>: defines default border radius for all
            buttons, including those used in more complex components (e.g. CRUD)
          </li>
          <br />
          <li className="ml-5">
            <strong>surface</strong>: defines default border radius for all
            surface components, i.e. Card, Alert, Badge, etc., including those
            used in more complex components (e.g. CRUD)
          </li>
          <br />
          <li className="ml-5">
            <strong>input</strong>: defines default border radius for all input
            fields, including those used in more complex components (e.g. CRUD)
          </li>
        </ol>
      </p>
      <br />
      <Typography variant="h4">Usage example</Typography>
      <Block
        code={`
        borderRadius: {
          none: "0",
          sm: "0.125rem",
          DEFAULT: "0.25rem",
          md: "0.375rem",
          lg: "0.5rem",
          full: "9999px",
          surface: "0",
          button: "0.125rem",
          input: "0",
        },`}
      />
      <br />
      <Statement
        code={`<Alert color={C.ContextColor.secondary} rounded="lg">Secondary alert</Alert>`}
      />
    </>
  );
};
