import React from "react";

import ToggleGeneric from "@nexys/react-bootstrap/dist/headless/toggle/toggle";
import { ToggleLayoutProps } from "@nexys/react-bootstrap/dist/headless/toggle/type";

const ToggleLayout = ({ isEdit, setEdit, children }: ToggleLayoutProps) => (
  <>
    {children}
    <button
      onClick={() => setEdit(!isEdit)}
      className={"rounded border border-black p-2"}
    >
      {isEdit ? "back to View" : "Edit"}
    </button>
  </>
);

const Toggle = ToggleGeneric(ToggleLayout);

export default Toggle;
