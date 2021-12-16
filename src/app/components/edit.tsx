import React from "react";
import Edit from "../../lib/components/edit";
import Typography from "../../lib/components/typography";
import { FormProps } from "@nexys/react-bootstrap/dist/headless/form/type";
import InputText from "../../lib/form/inputs/text";

const homeLink = "/";

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
      <p>my form</p>

      <InputText
        value={value.name}
        onChange={(name) => setValue({ ...value, name })}
      />

      <button type="submit">Submit</button>
    </form>
  );
};

const update = async (_data: Partial<Data>) => Promise.resolve(undefined);

const E = Edit<{ name: string }, string>(Form, update, homeLink);

export default () => (
  <>
    <Typography variant={"h2"}>Edit</Typography>
    <E id={"myuuid"} data={{ name: "fd" }} />
  </>
);
