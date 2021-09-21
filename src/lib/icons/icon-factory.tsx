import React from "react";

import Wrapper from "./svg-wrapper";
import * as T from "./type";

const IconFactorySVG = (
  d: string | string[],
  strokeWidth: number,
  strokeLinecap: T.StrokeLinecap = "round",
  strokeLinejoin: T.StrokeLinejoin = "round"
) => ({ className, svgProps }: T.IconProps) => {
  const p: string[] = typeof d === "string" ? [d] : d;
  return (
    <Wrapper className={className}>
      <>
        {p.map((i) => (
          <path
            strokeLinecap={strokeLinecap}
            strokeLinejoin={strokeLinejoin}
            strokeWidth={strokeWidth}
            {...svgProps}
            d={i}
          />
        ))}
      </>
    </Wrapper>
  );
};

export default IconFactorySVG;
