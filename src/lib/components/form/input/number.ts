import * as T from "@nexys/react-bootstrap/dist/headless/form/type";
import InputGeneric from "./generic";

export const InputNumber = ({
  value,
  onChange,
  errors,
  disabled,
  placeholder,
}: T.InputProps<number>) =>
  InputGeneric<number>({
    value,
    onChange,
    errors,
    disabled,
    placeholder,
    type: "number",
  });

export default InputNumber;
