import { c as createCommonjsModule, a as commonjsGlobal, g as getDefaultExportFromCjs } from '../../../../../common/_commonjsHelpers-8c19dec8.js';
import { r as react } from '../../../../../common/index-04edb6a1.js';
import { d as dist } from '../../../../../common/index-bfe78f7d.js';
import { t as type } from '../../../../../common/type-de216b6a.js';
import '../../../../../common/index-6164f816.js';

var generatorWoDef = createCommonjsModule(function (module, exports) {
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
const Validation = __importStar(dist);
const FormGeneratorWithoutDef = (FormUI, validator) => ({ onSuccess, isLoading = false, valueDefault = {}, errors: errorsDefault, }) => {
    const [data, setData] = react_1.default.useState(valueDefault);
    const [errors, setErrors] = react_1.default.useState(errorsDefault);
    react_1.default.useEffect(() => {
        setErrors(errorsDefault);
    }, [errorsDefault]);
    const handleSubmit = (event) => {
        event.preventDefault();
        // if validator is defined, do client side check
        // else simply invoke onSuccess
        if (validator) {
            const v = Validation.Main.checkObject(data, validator);
            // console.log(v);
            setErrors(v);
            // no errors found
            if (Object.values(v).length === 0) {
                //
                //alert(JSON.stringify(v));
                onSuccess(data);
            }
        }
        else {
            onSuccess(data);
        }
    };
    //console.log({ errors });
    return (react_1.default.createElement("form", { onSubmit: handleSubmit },
        react_1.default.createElement(FormUI, { errors: errors, data: data, disabled: isLoading, onChange: (name, value) => setData({ ...data, [name]: value }) })));
};
exports.default = FormGeneratorWithoutDef;
});

var utils = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateValidatorFromDef = exports.uiTypeToVType = exports.getValue = void 0;

const getValue = (v) => {
    if (v === "" || v === undefined || v === null) {
        return undefined;
    }
    const vn = Number(v);
    if (isNaN(vn)) {
        return v;
    }
    return vn;
};
exports.getValue = getValue;
const uiTypeToVType = (t) => {
    switch (t) {
        case type.FormType.Number:
        case type.FormType.Select:
            return "number";
        case type.FormType.SelectObject:
            return "object";
        case type.FormType.Text:
            return "string";
        case type.FormType.Switch:
            return "boolean";
    }
};
exports.uiTypeToVType = uiTypeToVType;
const generateValidatorFromDef = (df) => {
    const v = {};
    df.forEach((f) => {
        v[f.name] = {
            optional: f.optional,
            type: exports.uiTypeToVType(f.uiType),
        };
    });
    return v;
};
exports.generateValidatorFromDef = generateValidatorFromDef;
});

var ui = createCommonjsModule(function (module, exports) {
var __importDefault = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(react);
const FormGenericUI = (formDef, Wrapper, BtnSubmit, FormUnit) => ({ data, errors, onChange, disabled }) => {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        formDef.map((fd, i) => {
            const name = fd.name;
            const errorUnit = errors && errors[name];
            //console.log(name, errorUnit);
            return (react_1.default.createElement(Wrapper, { errors: errorUnit, key: i, label: fd.label },
                react_1.default.createElement(FormUnit, { type: fd.uiType, errors: errorUnit, value: data[fd.name], onChange: (v) => onChange(fd.name, v), options: fd.options, disabled: disabled })));
        }),
        react_1.default.createElement(BtnSubmit, { isLoading: disabled })));
};
exports.default = FormGenericUI;
});

var generator = createCommonjsModule(function (module, exports) {
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
exports.FormGenerator = void 0;
const generator_wo_def_1 = __importDefault(generatorWoDef);
const U = __importStar(utils);
const ui_1 = __importDefault(ui);
const FormGenerator = (Wrapper, FormUnit, BtnSubmit, formDef) => {
    const FormUI = ui_1.default(formDef, Wrapper, BtnSubmit, FormUnit);
    const validator = U.generateValidatorFromDef(formDef);
    return generator_wo_def_1.default(FormUI, validator);
};
exports.FormGenerator = FormGenerator;
exports.default = exports.FormGenerator;
});

var __pika_web_default_export_for_treeshaking__ = /*@__PURE__*/getDefaultExportFromCjs(generator);

export default __pika_web_default_export_for_treeshaking__;
