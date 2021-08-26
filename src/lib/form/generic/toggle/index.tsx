import React, { useState } from "react";

import Close from "../../../icons/close";
import Edit from "../../../icons/edit";

import Form from "../form";

import * as T from "../type";

const ActionButtonWrapper = (props: {
  children: JSX.Element;
  onClick: () => void;
}) => {
  const { children, onClick } = props;
  return (
    <div
      className="w-full text-right text-primary cursor-pointer "
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default <A,>({
  def,
  onSubmit,
  View,
  data: defaultData,
}: T.ToggleProps<A>) => {
  const [isEdit, setEdit] = useState<boolean>(false);
  const [data, setData] = useState<A>(defaultData);
  const [loading, setLoading] = useState<boolean>(false);
  const [errors, setErrors] = useState<any | undefined>(undefined);

  const handleSubmit = (d: A) => {
    setLoading(true);
    setData(d);
    onSubmit(d).then(
      (_) => {
        setEdit(false);
        setLoading(false);
        setErrors(undefined);
      },
      (err) => {
        setLoading(false);
        setErrors(err);
      }
    );
  };

  return (
    <>
      {isEdit ? (
        <>
          <ActionButtonWrapper onClick={() => setEdit(false)}>
            <Close />
          </ActionButtonWrapper>
          <Form<A, any>
            valueDefault={data}
            formDef={def}
            onSuccess={handleSubmit}
            isLoading={loading}
            errors={errors}
          />
        </>
      ) : (
        <>
          {" "}
          <ActionButtonWrapper onClick={() => setEdit(true)}>
            <Edit />
          </ActionButtonWrapper>
          <View data={data} />
        </>
      )}
    </>
  );
};
