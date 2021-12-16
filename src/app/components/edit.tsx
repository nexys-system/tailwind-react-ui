import React from "react";
import PEdit from "../../lib/components/edit";
import Typography from "../../lib/components/typography";
import { FormProps } from "@nexys/react-bootstrap/dist/headless/form/type";
import InputText from "../../lib/form/inputs/text";
import * as Buttons from "../../lib/components/buttons";

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

const E = PEdit<Data, string>(Form, update, homeLink);

export const Edit = PEdit<Data, string>(Form, update);

export default () => (
  <>
    <Typography variant={"h2"}>Edit</Typography>
    <E
      id={"myuuid"}
      data={{ name: "my default name" }}
      postUpdate={() => console.log("s")}
    />
  </>
);
