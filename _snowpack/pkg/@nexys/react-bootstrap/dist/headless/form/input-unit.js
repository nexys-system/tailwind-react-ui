import { g as getDefaultExportFromCjs, c as createCommonjsModule, a as commonjsGlobal } from '../../../../../common/_commonjsHelpers-8c19dec8.js';
import { r as react } from '../../../../../common/index-04edb6a1.js';
import { t as type } from '../../../../../common/type-de216b6a.js';

var inputUnit = createCommonjsModule(function (module, exports) {
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
const react_1 = __importDefault(react);
const TT = __importStar(type);
const InputUnitGeneric = (InputText, InputNumber, InputSwitch, InputSelectScalar, InputSelectObject) => ({ type, onChange, value, options, errors }) => {
    switch (type) {
        case TT.FormType.Select:
            if (!options) {
                throw Error("options were not given");
            }
            return (react_1.default.createElement(InputSelectScalar, { options: options, value: value, onChange: onChange, errors: errors }));
        case TT.FormType.SelectObject:
            if (!options) {
                throw Error("options were not given");
            }
            return (react_1.default.createElement(InputSelectObject, { options: options, value: value, onChange: onChange, errors: errors }));
        case TT.FormType.Number:
            return (react_1.default.createElement(InputNumber, { value: value, onChange: onChange, errors: errors }));
        case TT.FormType.Text:
            return (react_1.default.createElement(InputText, { value: value, onChange: onChange, errors: errors }));
        case TT.FormType.Switch:
            return (react_1.default.createElement(InputSwitch, { value: value, onChange: onChange, errors: errors }));
    }
};
exports.default = InputUnitGeneric;
});

var __pika_web_default_export_for_treeshaking__ = /*@__PURE__*/getDefaultExportFromCjs(inputUnit);

export default __pika_web_default_export_for_treeshaking__;
