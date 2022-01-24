import React from "react";

import FormGenerator from "@nexys/react-bootstrap/dist/headless/form/generator";
import { FormDef } from "@nexys/react-bootstrap/dist/headless/form/type";
import * as Wrapper from "../../../form/wrapper";
import FormUnit from "../input";
import * as Loader from "../../../spinner";

import Button from "../../../buttons/main";

const BtnSubmit = ({ isLoading }: { isLoading: boolean }) => {
  if (isLoading) {
    return <Loader.Loader />;
  }
  return <Button type="submit">Submit</Button>;
};

// note: do not Id type FormDef since the id represents the optionset identifier, bydefault string |number
export const FormWDef = <A,>(formDef: FormDef<A>[]) =>
  FormGenerator<A>(Wrapper.Group, FormUnit, BtnSubmit, formDef);
