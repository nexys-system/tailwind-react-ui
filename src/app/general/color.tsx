import React from "react";

import * as C from "../../lib/components/type";
import Typography from "../../lib/components/typography";

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
      <Typography variant="h2">Colors</Typography>

      <p className="my-5">
        Components rely on the intuitive color terminology, so that the
        following colors need to be defined in the{" "}
        <code>tailwind.config.js</code>
      </p>
      <div className="grid grid-cols-6 gap-3">
        {["primary", "secondary", "success", "warning", "error", "info"].map(
          (c) => {
            return <div className={`bg-${c} px-5 py-3 text-white`}>{c}</div>;
          }
        )}
      </div>
    </>
  );
};
