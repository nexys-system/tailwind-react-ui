import { Types } from "@nexys/core-list";

import { FormProps } from "@nexys/react-bootstrap/dist/headless/form/type";
import { ViewField } from "@nexys/react-bootstrap/dist/headless/view/type";

import ListInner from "../list";
import DetailGeneric from "../detail/index";

import * as CrudGeneric from "@nexys/react-bootstrap/dist/headless/crud/generic";
import {
  CrudRequest,
  ExtraUnit,
} from "@nexys/react-bootstrap/dist/headless/crud/type";

type Id = number;

const Crud = <A extends { id: Id }>(
  def: Types.Definition<A>,
  Form: (p: FormProps<A>) => JSX.Element,
  viewFields: ViewField<A>[],
  urlPrefix: string,
  crud: CrudRequest<A, Id>,
  editTitle: string = "Edit",
  extras?: ExtraUnit<A>[],
  showEditToggle: boolean = true,
  detailColWidth: number = 6
) =>
  CrudGeneric.CrudGenericWForm<A, Id>(ListInner, DetailGeneric, Form)(
    def,
    viewFields,
    urlPrefix,
    crud,
    showEditToggle,
    detailColWidth,
    extras,
    editTitle
  );

export default Crud;
