import React from "react";
import Wrapper from "./svg-wrapper";

export default (props: { className?: string }) => {
  return (
    <Wrapper className={props.className}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1}
        d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
      />
    </Wrapper>
  );
};