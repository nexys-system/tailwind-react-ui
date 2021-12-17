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
    const [isLoading, setIsLoading] = React.useState<boolean>(false);
    const handleSubmit = async (data: A) => {
      setIsLoading(true);
      await update(data, id);

      redirectUrl && history.push(redirectUrl);
      postUpdate && postUpdate(data);

      setIsLoading(false);
    };

    return (
      <Form
        isLoading={isLoading}
        valueDefault={dataIn}
        onSuccess={handleSubmit}
        options={formOptions}
      />
    );
  };

export default Edit;
