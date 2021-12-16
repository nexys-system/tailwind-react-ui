import React from "react";
import { useHistory } from "react-router-dom";
import { FormProps } from "@nexys/react-bootstrap/dist/headless/form/type";
import { EditProps } from "@nexys/react-bootstrap/dist/headless/edit/type";

const Edit =
  <A, Id = number>(
    Form: (a: FormProps<A>) => JSX.Element,
    update: (data: Partial<A>, id: Id) => Promise<void>,
    redirectUrl: string
  ) =>
  ({ id, data: dataIn, formOptions }: EditProps<A, Id>) => {
    const history = useHistory();

    const handleSubmit = async (data: Partial<Omit<A, "id">>) => {
      await update(data as any, id);
      history.push(redirectUrl);
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
