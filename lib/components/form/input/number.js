import InputGeneric from "./generic.js";
export const InputNumber = ({
  value,
  onChange,
  errors,
  disabled,
  placeholder
}) => InputGeneric({
  value,
  onChange,
  errors,
  disabled,
  placeholder,
  type: "number"
});
export default InputNumber;
