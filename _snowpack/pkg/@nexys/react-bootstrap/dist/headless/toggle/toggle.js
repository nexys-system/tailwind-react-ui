import { g as getDefaultExportFromCjs, c as createCommonjsModule, a as commonjsGlobal } from '../../../../../common/_commonjsHelpers-8c19dec8.js';
import { r as react } from '../../../../../common/index-04edb6a1.js';

var toggle = createCommonjsModule(function (module, exports) {
var __importDefault = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ToggleHeadless = void 0;
const react_1 = __importDefault(react);
const ToggleHeadless = (ToggleLayout) => (Edit, View) => ({ id, data, formOptions }) => {
    const [isEdit, setEdit] = react_1.default.useState(false);
    return (react_1.default.createElement(ToggleLayout, { isEdit: isEdit, setEdit: setEdit }, isEdit ? (react_1.default.createElement(Edit, { id: id, data: data, formOptions: formOptions, 
        // todo? postUpdate returns the data, use it to then re inject to View via state
        postUpdate: () => setEdit(false) })) : (react_1.default.createElement(View, { data: data }))));
};
exports.ToggleHeadless = ToggleHeadless;
exports.default = exports.ToggleHeadless;
});

var __pika_web_default_export_for_treeshaking__ = /*@__PURE__*/getDefaultExportFromCjs(toggle);

export default __pika_web_default_export_for_treeshaking__;
