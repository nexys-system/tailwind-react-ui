import React from "react";

import * as T from "../type";

import * as V from "@nexys/validation";
import * as U from "../utils";

import Button from "../../../components/buttons/main";
import Spinner from "../../../components/spinner/circular";

import Generator from "./generator";

const FormGenerator = <A,>({
  formDef,
  onSuccess,
  isLoading = false,
  valueDefault = {},
  errors: errorsDefault,
  submit = { label: "Submit" },
  FormUI = Generator,
}: {
  formDef: T.FormDef<A>[];
  onSuccess: (v: A) => void;
  isLoading?: boolean;
  valueDefault?: Partial<A>;
  errors?: V.Type.ErrorOut | V.Type.Error;
  submit?: { label: string };
  FormUI?: <A>(props: T.GeneratorProps<A>) => JSX.Element;
}) => {
  const [data, setData] = React.useState<Partial<A>>(valueDefault);
  const [errors, setErrors] = React.useState<
    V.Type.ErrorOut | V.Type.Error | undefined
  >(errorsDefault);

  React.useEffect(() => {
    setErrors(errorsDefault);
  }, [errorsDefault]);

  const validator = U.generateValidatorFromDef(formDef);

  const handleSubmit = (event: any): void => {
    event.preventDefault();

    const v = V.Main.checkObject(data, validator);
    setErrors(v);

    // no errors found

    if (Object.values(v).length === 0) {
      onSuccess(data as A);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormUI
        formDef={formDef}
        isLoading={isLoading}
        data={data}
        errors={errors}
        setData={setData}
      />

      <Button disabled={isLoading} type="submit">
        <>
          {isLoading && (
            <span className="flex flex-inline">
              <Spinner /> Loading
            </span>
          )}

          {!isLoading && submit.label}
        </>
      </Button>
    </form>
  );
};

export default FormGenerator;
