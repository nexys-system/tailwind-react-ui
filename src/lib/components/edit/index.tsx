import React from "react";
import { useHistory } from "react-router-dom";
import { FormProps } from "@nexys/react-bootstrap/dist/headless/form/type";
import { EditProps } from "@nexys/react-bootstrap/dist/headless/edit/type";

const Edit =
  <A, Id = number>(
    Form: (a: FormProps<A>) => JSX.Element,
    update: (data: A, id: Id) => Promise<void>,
    redirectUrl?: string
  ) =>
  ({ id, data: dataIn, formOptions, postUpdate }: EditProps<A, Id>) => {
    const history = useHistory();

    const handleSubmit = async (data: A) => {
      console.log("before update");
      await update(data, id);
      console.log("after update");
      redirectUrl && history.push(redirectUrl);
      postUpdate && postUpdate(data);
    };

    return (
      <Form
        valueDefault={dataIn}
        onSuccess={handleSubmit}
        options={formOptions}
      />
    );
  };

export default Edit;
