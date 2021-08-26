import React from "react";
import Wrapper from "./svg-wrapper";

export default (props: { className?: string }) => {
  return (
    <Wrapper {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1"
        d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
      ></path>
    </Wrapper>
  );
};
