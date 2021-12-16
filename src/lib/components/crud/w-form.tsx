import { Types } from "@nexys/core-list";

import { FormProps } from "@nexys/react-bootstrap/dist/headless/form/type";
import { ViewField } from "@nexys/react-bootstrap/dist/headless/view/type";

import ListInner from "../list";
import DetailGeneric from "../detail/index";

import CrudGenericWForm from "@nexys/react-bootstrap/dist/headless/crud/w-form ";
import {
  CrudRequest,
  ExtraUnit,
  CrudOptions,
} from "@nexys/react-bootstrap/dist/headless/crud/type";

const Crud = <A extends { id: Id }, Id>(
  def: Types.Definition<A>,
  Form: (p: FormProps<A>) => JSX.Element,
  viewFields: ViewField<A>[],
  urlPrefix: string,
  crud: CrudRequest<A, Id>,
  extras?: ExtraUnit<A>[],
  options?: CrudOptions
) =>
  CrudGenericWForm<A, Id>(ListInner, DetailGeneric, Form)(
    def,
    viewFields,
    urlPrefix,
    crud,
    extras,
    options
  );

export default Crud;
