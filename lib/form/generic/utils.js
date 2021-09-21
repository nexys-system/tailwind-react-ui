import * as T from "./type.js";
export const uiTypeToVType = (t) => {
  switch (t) {
    case T.FormType.Number:
      return "number";
    case T.FormType.Text:
      return "string";
    case T.FormType.Select:
      return "number";
    case T.FormType.Switch:
      return "boolean";
    default:
      return "string";
  }
};
const extraCheckGeneric = ({
  uiType,
  options
}) => {
  if (uiType === T.FormType.Select) {
    return (v) => extraCheckSelect(v, options);
  }
  return;
};
const extraCheckSelect = (v, options) => {
  if (!options) {
    throw Error("options undefined for select, aborting");
  }
  const item = options.find((x) => x.id === v);
  if (!item) {
    return ["could not find item"];
  }
  return;
};
export const generateValidatorFromDef = (df) => {
  const v = {};
  df.forEach((f) => {
    const type = uiTypeToVType(f.uiType);
    const extraCheck = extraCheckGeneric(f);
    v[f.name] = {
      optional: f.optional,
      type,
      extraCheck
    };
  });
  return v;
};
export const isError = (error, attr) => {
  const isCheck = error[attr] !== void 0;
  return isCheck;
};
