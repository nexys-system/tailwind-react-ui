import React from "react";

import FormGenerator from "@nexys/react-bootstrap/dist/headless/form/generator";
import { FormDef } from "@nexys/react-bootstrap/dist/headless/form/type";
import * as Wrapper from "../../wrapper";
import FormUnit from "../input";

const BtnSubmit = ({ isLoading }: { isLoading: boolean }) => (
  <button
    disabled={isLoading}
    type="submit"
    className={"border rounded border-blue-800 p-2"}
  >
    {isLoading && (
      <>
        <span
          className="spinner-border spinner-border-sm"
          role="status"
          aria-hidden="true"
        ></span>
        <span className="sr-only">...Loading</span>
      </>
    )}

    {!isLoading && <>Submit</>}
  </button>
);

export const FormWDef = <A,>(formDef: FormDef<A>[]) =>
  FormGenerator<A>(Wrapper.Group, FormUnit, BtnSubmit, formDef);
