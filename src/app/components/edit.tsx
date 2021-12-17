import React from "react";
import PEdit from "../../lib/components/edit";
import Typography from "../../lib/components/typography";
import { FormProps } from "@nexys/react-bootstrap/dist/headless/form/type";
import InputText from "../../lib/form/inputs/text";
import { ContextProvider } from "../../lib";

const {
  Notification: { Context, Type },
} = ContextProvider;

interface Data {
  name: string;
}

const Form = ({ valueDefault, onSuccess }: FormProps<Data>) => {
  const [value, setValue] = React.useState<Partial<Data>>(valueDefault);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSuccess(value as Data);
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputText
        value={value.name}
        onChange={(name) => setValue({ ...value, name })}
      />

      <button
        type="submit"
        className="rounded text-primary border border-primary p-2"
      >
        Submit
      </button>
    </form>
  );
};

const update = async (_data: Partial<Data>) => Promise.resolve(undefined);

export const Edit = PEdit<Data, string>(Form, update);

const EditFinal = () => {
  const { setNotification } = Context.useToastContext();
  return (
    <>
      <Typography variant={"h2"}>Edit</Typography>
      <Edit
        id={"myuuid"}
        data={{ name: "my default name" }}
        postUpdate={() =>
          setNotification({
            text: "hello",
            type: Type.NotificationType.toast,
            messageType: Type.MessageType.info,
          })
        }
      />
    </>
  );
};

export default EditFinal;
