import React from "react";
import { Link } from "react-router-dom";

import { ArrowCircleRight, PlusCircle, ArrowCircleLeft } from "../icons";

const LinkBtn = ({
  link,
  children,
}: {
  link: string;
  children: JSX.Element | string;
}) => (
  <Link className="float-right text-primary hover:text-primary-400" to={link}>
    {children}
  </Link>
);

export const LinkAdd = ({ link }: { link: string }) => (
  <LinkBtn link={link}>
    <>
      <PlusCircle className="mb-1" /> Add
    </>
  </LinkBtn>
);

export const LinkBack = ({ link }: { link: string }) => (
  <LinkBtn link={link}>
    <>
      <ArrowCircleLeft className="mb-1" /> Back
    </>
  </LinkBtn>
);

export const EditBtn = ({ link }: { link: string }) => (
  <Link to={link} className={"text-primary hover:text-primary-400"}>
    <ArrowCircleRight />
  </Link>
);
