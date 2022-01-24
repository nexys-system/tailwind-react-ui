// import * as Inputs from "../input";
import * as Inputs from "../../../form/inputs";
import InputUnitGeneric from "@nexys/react-bootstrap/dist/headless/form/input-unit";

const InputUnit = InputUnitGeneric(
  Inputs.Text,
  Inputs.Number,
  Inputs.Boolean.Checkbox,
  Inputs.Select.Scalar,
  Inputs.Select.Object
);

export default InputUnit;
