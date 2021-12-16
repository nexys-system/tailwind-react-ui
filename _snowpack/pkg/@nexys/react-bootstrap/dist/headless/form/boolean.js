import { g as getDefaultExportFromCjs, c as createCommonjsModule, a as commonjsGlobal } from '../../../../../common/_commonjsHelpers-8c19dec8.js';
import { r as react } from '../../../../../common/index-04edb6a1.js';

var boolean_1 = createCommonjsModule(function (module, exports) {
var __importDefault = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(react);
const getCheckedValue = (value) => {
    if (typeof value === "boolean") {
        return value;
    }
    return false;
};
const InputBooleanGeneric = (UI) => ({ value, disabled, onChange, errors }) => {
    return (react_1.default.createElement(UI, { checked: getCheckedValue(value), setToggle: () => onChange(!value), errors: errors, disabled: disabled }));
};
exports.default = InputBooleanGeneric;
});

var __pika_web_default_export_for_treeshaking__ = /*@__PURE__*/getDefaultExportFromCjs(boolean_1);

export default __pika_web_default_export_for_treeshaking__;
