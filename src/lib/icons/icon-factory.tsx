import React from "react";

import Wrapper from "./svg-wrapper";
import * as T from "./type";

const IconFactorySVG =
  (
    d: string,
    strokeWidth: number,
    strokeLinecap: T.StrokeLinecap = "round",
    strokeLinejoin: T.StrokeLinejoin = "round"
  ) =>
  ({
    className,
    svgProps,
  }: T.IconProps) =>
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
