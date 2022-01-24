import React from "react";

const AHref = ({
  link,
  children,
  target,
}: {
  link: string;
  children: string | JSX.Element;
  target?: React.HTMLAttributeAnchorTarget;
}) => (
  <a
    target={target}
    className={"text-blue-500 hover:text-blue-800"}
    href={link}
  >
    {children}
  </a>
);

export default AHref;
