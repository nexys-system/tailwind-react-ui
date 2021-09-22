// inspired from https://mui.com/api/typography/
// see bottstrap https://getbootstrap.com/docs/4.0/content/typography/
// see tailwind ref https://tailwindcss.com/docs/font-size

import React from "react";

type TypographyVariant = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "body";

const getComponent = (variant: TypographyVariant) => {
  switch (variant) {
    case "h1":
      return ({ children }: { children: string | JSX.Element }) => (
        <h1 className={"text-primary-500 text-3xl px-2"}>{children}</h1>
      );
    case "h2":
      return ({ children }: { children: string | JSX.Element }) => (
        <h2 className={"text-primary-500 text-2xl px-2"}>{children}</h2>
      );
    case "h3":
      return ({ children }: { children: string | JSX.Element }) => (
        <h3 className={"text-primary-500 text-xl px-2"}>{children}</h3>
      );
    case "h4":
      return ({ children }: { children: string | JSX.Element }) => (
        <h4 className={"text-primary-500 text-lg px-2"}>{children}</h4>
      );
    case "h5":
      return ({ children }: { children: string | JSX.Element }) => (
        <h5 className={"text-primary-500"}>{children}</h5>
      );
    case "h6":
      return ({ children }: { children: string | JSX.Element }) => (
        <h6 className={"text-primary-500"}>{children}</h6>
      );
    case "body":
      return ({ children }: { children: string | JSX.Element }) => (
        <p>{children}</p>
      );
  }
};

const Typography = ({
  variant = "body",
  children,
}: {
  variant?: TypographyVariant;
  children: string | JSX.Element;
}) => {
  const C = getComponent(variant);

  return <C>{children}</C>;
};

export default Typography;
