import React from "react";

import Wrapper from "./svg-wrapper";

export default (props: { className?: string }) => {
  return (
    <Wrapper {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1}
        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
      />
    </Wrapper>
  );
};
