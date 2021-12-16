import { Types } from "@nexys/core-list";

import { FormDef } from "@nexys/react-bootstrap/dist/headless/form/type";
import { ViewField } from "@nexys/react-bootstrap/dist/headless/view/type";

import ListInner from "../list";
import DetailGeneric from "../detail/index";
import { FormWDef } from "../form/generic/generator/index";

import * as CrudGeneric from "@nexys/react-bootstrap/dist/headless/crud/generic";
import {
  CrudRequest,
  ExtraUnit,
} from "@nexys/react-bootstrap/dist/headless/crud/type";

const Crud = <A extends { id: Id }, Id>(
  def: Types.Definition<A>,
  defDetail: FormDef<A>[],
  viewFields: ViewField<A>[],
  urlPrefix: string,
  crud: Partial<CrudRequest<A, Id>>,
  editTitle: string = "Edit",
  extras?: ExtraUnit<A>[],
  showEditToggle: boolean = true,
  detailColWidth: number = 6
) =>
  CrudGeneric.CrudGeneric<A, Id>(ListInner, DetailGeneric, FormWDef)(
    def,
    defDetail,
    viewFields,
    urlPrefix,
    crud as CrudRequest<A, Id>,
    showEditToggle,
    detailColWidth,
    extras,
    editTitle
  );

export default Crud;
