import * as Inputs from "../input/index.js";
import InputUnitGeneric from "../../../../_snowpack/pkg/@nexys/react-bootstrap/dist/headless/form/input-unit.js";
const InputUnit = InputUnitGeneric(Inputs.Text, Inputs.Number, Inputs.Switch, Inputs.Select.Scalar, Inputs.Select.OptionSet);
export default InputUnit;
