import React from "react";

import Button from "../../../components/buttons/main";
import Spinner from "../../../components/loader/main";

export interface UISUbmitProps {
  isLoading: boolean;
  label: string;
}

const UISubmit = ({ isLoading, label }: UISUbmitProps) => {
  return (
    <Button disabled={isLoading} type="submit">
      <>
        {isLoading && (
          <span className="flex flex-inline">
            <Spinner /> Loading
          </span>
        )}

        {!isLoading && label}
      </>
    </Button>
  );
};

export default UISubmit;
