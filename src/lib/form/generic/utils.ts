import * as T from "./type";
import * as V from "@nexys/validation";

export const uiTypeToVType = (t: T.FormType): V.Type.FieldType => {
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

const extraCheckGeneric = <A>({
  uiType,
  options,
}: T.FormDef<A>): ((s: any) => string[] | undefined) | undefined => {
  if (uiType === T.FormType.Select) {
    return (v: any) => extraCheckSelect(v, options);
  }

  return;
};

const extraCheckSelect = (
  v: any,
  options?: { id: number | string; name: string }[]
) => {
  if (!options) {
    throw Error("options undefined for select, aborting");
  }

  const item = options.find((x) => x.id === v);

  if (!item) {
    return ["could not find item"];
  }

  return;
};

export const generateValidatorFromDef = <A>(df: T.FormDef<A>[]) => {
  const v: V.Type.Shape = {};

  df.forEach((f) => {
    const type = uiTypeToVType(f.uiType);
    const extraCheck = extraCheckGeneric(f);
    v[f.name as string] = {
      optional: f.optional,
      type,
      extraCheck,
    };
  });

  return v;
};

export const isError = (
  error: V.Type.Error | V.Type.ErrorOut,
  attr: string
): error is V.Type.Error => {
  const isCheck = (error as V.Type.Error)[attr] !== undefined;
  return isCheck;
};
