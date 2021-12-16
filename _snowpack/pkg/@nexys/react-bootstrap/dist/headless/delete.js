import { g as getDefaultExportFromCjs, c as createCommonjsModule, a as commonjsGlobal } from '../../../../common/_commonjsHelpers-8c19dec8.js';
import { r as react } from '../../../../common/index-04edb6a1.js';
import { r as reactRouterDom } from '../../../../common/react-router-dom-c179052c.js';

var _delete = createCommonjsModule(function (module, exports) {
var __importDefault = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(react);

const confirmPromptMessageDefault = "Are you sure you would like to delete?";
const DeleteHeadless = (DeleteBtn) => (deleteById, redirectUrl, confirmPromptMessage = confirmPromptMessageDefault) => ({ id }) => {
    const history = reactRouterDom.useHistory();
    const handleDelete = () => {
        if (confirm(confirmPromptMessage)) {
            deleteById(id);
            history.push(redirectUrl);
        }
    };
    return react_1.default.createElement(DeleteBtn, { onClick: handleDelete });
};
exports.default = DeleteHeadless;
});

var __pika_web_default_export_for_treeshaking__ = /*@__PURE__*/getDefaultExportFromCjs(_delete);

export default __pika_web_default_export_for_treeshaking__;
