import { Types } from "@nexys/core-list";

import { FormDef } from "@nexys/react-bootstrap/dist/headless/form/type";
import { ViewField } from "@nexys/react-bootstrap/dist/headless/view/type";
import {
  CrudRequest,
  ExtraUnit,
  CrudOptions,
  CrudSimpleDef,
} from "@nexys/react-bootstrap/dist/headless/crud/type";

import Crud from "./index";

const defDetailToDef = <A,>(
  defDetail: CrudSimpleDef<A>[]
): Types.Definition<A> =>
  defDetail.map((d) => ({
    name: d.name,
    uiType: d.uiType,
    optional: d.optional,
    label: d.label,
    render: d.render,
    sort: d.sort,
    filter: d.filter,
  }));

const defDetailToView = <A,>(defDetail: FormDef<A>[]): ViewField<A>[] =>
  defDetail.map((d) => [d.label || (d.name as string), d.name]);

const CrudSimple = <A extends { id: Id }, Id>(
  defDetail: CrudSimpleDef<A>[],
  urlPrefix: string,
  crud: CrudRequest<A, Id>,
  extras?: ExtraUnit<A>[],
  options?: CrudOptions
) => {
  const def: Types.Definition<A> = defDetailToDef(defDetail);
  const viewFields: ViewField<A>[] = defDetailToView(defDetail);

  return Crud<A, Id>(
    def,
    defDetail,
    viewFields,
    urlPrefix,
    crud,
    extras,
    options
  );
};

export default CrudSimple;
