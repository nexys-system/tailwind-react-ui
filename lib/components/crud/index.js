import ListInner from "../list/index.js";
import DetailGeneric from "../detail/index.js";
import {FormWDef} from "../form/generic/generator/index.js";
import * as CrudGeneric from "../../../_snowpack/pkg/@nexys/react-bootstrap/dist/headless/crud.js";
const Crud = (def, defDetail, viewFields, urlPrefix, crud, extras, options) => CrudGeneric.CrudGeneric(ListInner, DetailGeneric, FormWDef)(def, defDetail, viewFields, urlPrefix, crud, extras, options);
export default Crud;
