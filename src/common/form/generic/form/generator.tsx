import React from "react";

import * as Form from "../..";
import FormUnit from "./unit";

import * as T from "../type";

import * as U from "../utils";

export default <A extends { [k: string]: any }>(props: T.GeneratorProps<A>) => {
  const { formDef, errors, data, setData, isLoading } = props;
  return (
    <>
      {formDef
        .filter((fd) => !fd.hide)
        .map((fd, i) => {
          const name = fd.name;
          // const errorUnit = errors && (errors[name] as string[]);
          const errorUnit =
            errors && U.isError(errors, name as string)
              ? (errors[name as string] as string[])
              : undefined;
          return (
            <Form.Wrapper
              errors={errorUnit}
              key={i}
              label={fd.label}
              inputType={fd.uiType === T.FormType.Switch ? "switch" : "default"}
            >
              <FormUnit
                fd={fd}
                errors={errorUnit}
                value={data[fd.name]}
                onChange={(v) => {
                  setData({ ...data, [fd.name]: v });
                }}
                disabled={isLoading || fd.disabled === true}
                options={fd.options}
              />
            </Form.Wrapper>
          );
        })}
    </>
  );
};
