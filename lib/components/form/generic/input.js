import * as Inputs from "../../../form/inputs/index.js";
import InputUnitGeneric from "../../../../_snowpack/pkg/@nexys/react-bootstrap/dist/headless/form/input-unit.js";
const InputUnit = InputUnitGeneric(Inputs.Text, Inputs.Number, Inputs.Boolean.Checkbox, Inputs.Select.Scalar, Inputs.Select.Object);
export default InputUnit;
