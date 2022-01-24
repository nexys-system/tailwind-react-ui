import React from "react";

import ToggleGeneric from "@nexys/react-bootstrap/dist/headless/toggle/toggle";
import { ToggleLayoutProps } from "@nexys/react-bootstrap/dist/headless/toggle/type";
import * as Icons from "../../icons";
import Button from "../buttons/main";

const ToggleLayout = ({ isEdit, setEdit, children }: ToggleLayoutProps) => (
  <>
    {children}
    <span className={`${isEdit && "float-right -mt-16"}`}>
      <Button
        onClick={() => setEdit(!isEdit)}
        variant={isEdit ? "transparent" : "filled"}
      >
        <>
          {isEdit ? (
            <Icons.ArrowCircleLeft className="mb-1 mr-1 " />
          ) : (
            <Icons.Edit className="mr-1 pb-1" />
          )}
          {isEdit ? "Back" : "Edit"}
        </>
      </Button>
    </span>
  </>
);

const Toggle = ToggleGeneric(ToggleLayout);

export default Toggle;
