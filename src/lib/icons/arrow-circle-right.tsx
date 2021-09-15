import React from "react";
import Wrapper from "./svg-wrapper";

const ArrowCircleRight = (props: { className?: string }) => {
  return (
    <Wrapper className={props.className}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke-width="2"
        d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </Wrapper>
  );
};

export default ArrowCircleRight;
