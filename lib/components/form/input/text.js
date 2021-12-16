import InputGeneric from "./generic.js";
export const InputText = ({
  value,
  onChange,
  errors,
  disabled,
  placeholder,
  type = "text"
}) => InputGeneric({
  value,
  onChange,
  errors,
  disabled,
  placeholder,
  type
});
export default InputText;
