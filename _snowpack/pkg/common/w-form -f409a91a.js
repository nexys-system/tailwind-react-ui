import { c as createCommonjsModule, a as commonjsGlobal, g as getDefaultExportFromCjs } from './_commonjsHelpers-8c19dec8.js';
import { r as react } from './index-04edb6a1.js';
import { r as reactRouterDom } from './react-router-dom-c179052c.js';

var add = createCommonjsModule(function (module, exports) {
var __importDefault = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(react);

const Add = (insert, Form, redirectUrl) => ({ data = {} }) => {
    const history = reactRouterDom.useHistory();
    const handleSubmit = (data) => insert(data).then((_x) => {
        history.push(redirectUrl);
    });
    return react_1.default.createElement(Form, { valueDefault: data, onSuccess: handleSubmit });
};
exports.default = Add;
});

var utils = createCommonjsModule(function (module, exports) {
var __importDefault = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddComponent = void 0;
const react_1 = __importDefault(react);
const add_1 = __importDefault(add);
// this is to account for the case when add is not given
const AddComponent = (Form, urlPrefix, crudInsert) => {
    if (!crudInsert) {
        return () => react_1.default.createElement(react_1.default.Fragment, null);
    }
    return add_1.default(crudInsert, Form, urlPrefix);
};
exports.AddComponent = AddComponent;
});

var wForm_ = createCommonjsModule(function (module, exports) {
var __createBinding = (commonjsGlobal && commonjsGlobal.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (commonjsGlobal && commonjsGlobal.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (commonjsGlobal && commonjsGlobal.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CrudGenericWForm = void 0;
const react_1 = __importDefault(react);

const U = __importStar(utils);
// same as above but the form needs to be given, `Form`
const CrudGenericWForm = (ListGeneric, DetailGeneric, Form) => (def, viewFields, urlPrefix, crud, extras, options = {}) => {
    const { showEditToggle = true, detailColWidth = 6, editTitle } = options;
    const addLink = urlPrefix + "/add";
    const editLink = (childId) => urlPrefix + "/" + childId + "/edit";
    const redirectUrl = urlPrefix;
    const backUrl = urlPrefix;
    const List = () => (react_1.default.createElement(ListGeneric, { editLink: editLink, addLink: crud.insert && addLink, getData: crud.list, def: def }));
    const PreDetail = DetailGeneric(Form, viewFields, { update: crud.update, deleteById: crud.deleteById, detail: crud.detail }, redirectUrl, showEditToggle, detailColWidth, extras, editTitle);
    const Detail = () => react_1.default.createElement(PreDetail, { backUrl: backUrl });
    return () => (react_1.default.createElement(reactRouterDom.Switch, null,
        react_1.default.createElement(reactRouterDom.Route, { exact: true, path: addLink, component: U.AddComponent(Form, urlPrefix, crud.insert) }),
        react_1.default.createElement(reactRouterDom.Route, { path: editLink(":id"), component: Detail }),
        react_1.default.createElement(reactRouterDom.Route, { path: urlPrefix, component: List })));
};
exports.CrudGenericWForm = CrudGenericWForm;
exports.default = exports.CrudGenericWForm;
});

var __pika_web_default_export_for_treeshaking__ = /*@__PURE__*/getDefaultExportFromCjs(wForm_);

export { __pika_web_default_export_for_treeshaking__ as _, wForm_ as w };
