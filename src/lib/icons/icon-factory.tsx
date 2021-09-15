import React from "react";

import Wrapper from "./svg-wrapper";

// add React.SVGAttributes ?
// see https://github.com/DefinitelyTyped/DefinitelyTyped/blob/1349b640d4d07f40aa7c1c6931f18e3fbf667f3a/types/react/index.d.ts#L2341

const IconFactorySVG =
  (d: string, strokeWidth: number = 2) =>
  ({ className }: { className?: string }) =>
    (
      <Wrapper className={className}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokeWidth}
          d={d}
        />
      </Wrapper>
    );

export default IconFactorySVG;
