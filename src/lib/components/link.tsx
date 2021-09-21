import React from "react";

const AHref = ({
  link,
  children,
}: {
  link: string;
  children: string | JSX.Element;
}) => (
  <a className={"text-blue-500 hover:text-blue-800"} href={link}>
    {children}
  </a>
);

export default AHref;
