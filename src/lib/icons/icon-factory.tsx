import React from "react";

import Wrapper from "./svg-wrapper";

// add React.SVGAttributes ?
// see https://github.com/DefinitelyTyped/DefinitelyTyped/blob/1349b640d4d07f40aa7c1c6931f18e3fbf667f3a/types/react/index.d.ts#L2341

type StrokeLine = "inherit" | "round" | "butt" | "square" | undefined;

const IconFactorySVG =
  (
    d: string,
    strokeWidth: number = 2,
    strokeLinecap: StrokeLine = "round",
    strokeLinejoin: StrokeLine = "round"
  ) =>
  ({ className, svgProps }: { className?: string, svgProps?: React.SVGAttributes<any> }) =>
    (
      <Wrapper className={className}>
        <path
          strokeLinecap={strokeLinecap}
          strokeLinejoin={strokeLinejoin}
          strokeWidth={strokeWidth}
          {...svgProps}
          d={d}
        />
      </Wrapper>
    );

export default IconFactorySVG;
