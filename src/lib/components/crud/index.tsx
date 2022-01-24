import { Types } from "@nexys/core-list";

import { FormDef } from "@nexys/react-bootstrap/dist/headless/form/type";
import { ViewField } from "@nexys/react-bootstrap/dist/headless/view/type";

import ListInner from "../list";
import DetailGeneric from "../detail/index";
import { FormWDef } from "../../form/generic-2/generator/index";

import * as CrudGeneric from "@nexys/react-bootstrap/dist/headless/crud";
import {
  CrudRequest,
  ExtraUnit,
  CrudOptions,
} from "@nexys/react-bootstrap/dist/headless/crud/type";

const Crud = <A extends { id: Id }, Id>(
  def: Types.Definition<A>,
  defDetail: FormDef<A>[],
  viewFields: ViewField<A>[],
  urlPrefix: string,
  crud: CrudRequest<A, Id>,

  extras?: ExtraUnit<A>[],
  options?: CrudOptions
) =>
  CrudGeneric.CrudGeneric<A, Id>(ListInner, DetailGeneric, FormWDef)(
    def,
    defDetail,
    viewFields,
    urlPrefix,
    crud,
    extras,
    options
  );

export default Crud;
