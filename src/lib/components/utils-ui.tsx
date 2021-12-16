import React from "react";
import { Link } from "react-router-dom";

import { ArrowCircleRight, PlusCircle, ArrowLeft } from "../icons";

const LinkBtn = ({
  link,
  children,
}: {
  link: string;
  children: JSX.Element | string;
}) => (
  <Link className="float-right" to={link}>
    {children}
  </Link>
);

export const LinkAdd = ({ link }: { link: string }) => (
  <LinkBtn link={link}>
    <>
      <PlusCircle /> Add
    </>
  </LinkBtn>
);

export const LinkBack = ({ link }: { link: string }) => (
  <LinkBtn link={link}>
    <>
      <ArrowLeft /> Back
    </>
  </LinkBtn>
);

export const EditBtn = ({ link }: { link: string }) => (
  <Link to={link} className={"text-blue-500"}>
    <ArrowCircleRight />
  </Link>
);
