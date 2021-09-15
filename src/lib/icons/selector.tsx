import React from "react";
import Wrapper from "./svg-wrapper";

export default (props: { className?: string }) => {
  return (
    <Wrapper className={props.className}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M8 9l4-4 4 4m0 6l-4 4-4-4"
      ></path>
    </Wrapper>
  );
};
