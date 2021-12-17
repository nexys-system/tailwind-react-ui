import React from "react";

import FormGenerator from "@nexys/react-bootstrap/dist/headless/form/generator";
import { FormDef } from "@nexys/react-bootstrap/dist/headless/form/type";
import * as Wrapper from "../../wrapper";
import FormUnit from "../input";
import * as Loader from "../../../spinner";

const BtnSubmit = ({ isLoading }: { isLoading: boolean }) => {
  if (isLoading) {
    return <Loader.CircularLoader />;
  }
  return (
    <button type="submit" className={"border rounded border-blue-800 p-2"}>
      Submit
    </button>
  );
};

// note: do not Id type FormDef since the id represents the optionset identifier, bydefault string |number
export const FormWDef = <A,>(formDef: FormDef<A>[]) =>
  FormGenerator<A>(Wrapper.Group, FormUnit, BtnSubmit, formDef);
