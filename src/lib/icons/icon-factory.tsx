import React from "react";

import Wrapper from "./svg-wrapper";
import * as T from "./type";

const IconFactorySVG =
  (
    d: string | string[],
    strokeWidth: number = 1,
    strokeLinecap: T.StrokeLinecap = "round",
    strokeLinejoin: T.StrokeLinejoin = "round"
  ) =>
  ({ className, svgProps }: T.IconProps) => {
    const paths: string[] = typeof d === "string" ? [d] : d;

    return (
      <Wrapper className={className}>
        {paths.map((d, i) => (
          <path
            key={i}
            strokeLinecap={strokeLinecap}
            strokeLinejoin={strokeLinejoin}
            strokeWidth={strokeWidth}
            {...svgProps}
            d={d}
          />
        ))}
      </Wrapper>
    );
  };

export default IconFactorySVG;
