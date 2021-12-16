import ListInner from "../list/index.js";
import DetailGeneric from "../detail/index.js";
import CrudGenericWForm from "../../../_snowpack/pkg/@nexys/react-bootstrap/dist/headless/crud/w-form .js";
const Crud = (def, Form, viewFields, urlPrefix, crud, extras, options) => CrudGenericWForm(ListInner, DetailGeneric, Form)(def, viewFields, urlPrefix, crud, extras, options);
export default Crud;
