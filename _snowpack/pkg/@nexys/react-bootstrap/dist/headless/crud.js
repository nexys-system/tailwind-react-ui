import { g as getDefaultExportFromCjs, c as createCommonjsModule, a as commonjsGlobal } from '../../../../common/_commonjsHelpers-8c19dec8.js';
import { w as wForm_ } from '../../../../common/w-form -f409a91a.js';
import '../../../../common/index-04edb6a1.js';
import '../../../../common/react-router-dom-c179052c.js';

var crud = createCommonjsModule(function (module, exports) {
var __importDefault = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CrudGeneric = void 0;
const w_form_1 = __importDefault(wForm_);
// this one will generate the form based on the definition
const CrudGeneric = (ListGeneric, DetailGeneric, FormWDef) => (def, defDetail, viewFields, urlPrefix, crud, extras, options) => {
    const Form = FormWDef(defDetail);
    return w_form_1.default(ListGeneric, DetailGeneric, Form)(def, viewFields, urlPrefix, crud, extras, options);
};
exports.CrudGeneric = CrudGeneric;
exports.default = exports.CrudGeneric;
});

var __pika_web_default_export_for_treeshaking__ = /*@__PURE__*/getDefaultExportFromCjs(crud);

var CrudGeneric = crud.CrudGeneric;
export default __pika_web_default_export_for_treeshaking__;
export { CrudGeneric, crud as __moduleExports };
