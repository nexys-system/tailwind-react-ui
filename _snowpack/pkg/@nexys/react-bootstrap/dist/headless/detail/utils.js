import { c as createCommonjsModule } from '../../../../../common/_commonjsHelpers-8c19dec8.js';

var utils = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.getParamTyped = void 0;
const getParamTyped = (_paramType, id) => {
    if (!id) {
        throw Error("id could not be found");
    }
    /*if (paramType === "number") {
      const nid = Number(id);
      if (isNaN(nid)) {
        throw Error("nid is not a number");
      }
  
      return nid as any as Id;
    }*/
    return id;
};
exports.getParamTyped = getParamTyped;
});

var getParamTyped = utils.getParamTyped;
export { getParamTyped };
