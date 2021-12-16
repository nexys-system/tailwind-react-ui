import * as T from "@nexys/react-bootstrap/dist/headless/form/type";
import InputGeneric from "./generic";

export const InputText = ({
  value,
  onChange,
  errors,
  disabled,
  placeholder,
  type = "text",
}: T.InputProps<string> & { type?: T.InputTypeString }) =>
  InputGeneric<string>({
    value,
    onChange,
    errors,
    disabled,
    placeholder,
    type,
  });

export default InputText;
