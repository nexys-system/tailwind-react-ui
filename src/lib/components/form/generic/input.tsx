import * as Inputs from "../input";
import InputUnitGeneric from "@nexys/react-bootstrap/dist/headless/form/input-unit";

const InputUnit = InputUnitGeneric(
  Inputs.Text,
  Inputs.Number,
  Inputs.Switch,
  Inputs.Select.Scalar,
  Inputs.Select.OptionSet
);

export default InputUnit;
