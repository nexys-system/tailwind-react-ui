/**
 * <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
 * </svg>
 */

import React from "react";
import Wrapper from "./svg-wrapper";

export default (props: { className?: string }) => {
  return (
    <Wrapper className={props.className}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1"
        d="M4 6h16M4 12h16M4 18h16"
      ></path>
    </Wrapper>
  );
};
