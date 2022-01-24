import React from "react";

import { Link } from "react-router-dom";

interface Props {
  url: string;
  children?: string | React.ReactNode;
  inline?: boolean;
}

const classes = [
  `text-primary`,
  `hover:text-primary-400`,
  `cursor-pointer`,
  `transition`,
  `ease-in-out`,
  `duration-200`,
];

export const Internal = ({ url, children, inline = true }: Props) => {
  return (
    <Link
      to={url}
      className={classes.join(" ")}
      target={inline ? undefined : "_blank"}
      rel={inline ? undefined : "noopener noreferrer"}
    >
      {children || url}
    </Link>
  );
};

export const External = ({ url, children, inline = false }: Props) => {
  return (
    <a
      href={url}
      className={classes.join(" ")}
      target={inline ? undefined : "_blank"}
      rel={inline ? undefined : "noopener noreferrer"}
    >
      {children || url}
    </a>
  );
};
