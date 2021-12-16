import React from "react";

import {
  //ColWidth,
  CrudRequestDetail,
  DetailLayoutProps,
} from "@nexys/react-bootstrap/dist/headless/detail/type";
import { ViewField } from "@nexys/react-bootstrap/dist/headless/view/type";

import Layout from "./layout";
import Detail from "./main";
import { FormProps } from "@nexys/react-bootstrap/dist/headless/form/type";
import { ExtraUnit } from "@nexys/react-bootstrap/dist/headless/crud/type";

const DetailWLayout =
  <Id, A extends { id: Id }>(
    Form: (a: FormProps<A>) => JSX.Element,
    viewFields: ViewField<A>[],
    { update, detail, deleteById, getOptions }: CrudRequestDetail<A, Id>,
    redirectUrlDelete: string,
    showToggle: boolean = true,
    detailColWidth: number,
    extras?: ExtraUnit<A>[],
    editTitle?: string
  ) =>
  ({ backUrl, id }: Omit<DetailLayoutProps<Id>, "Detail"> & { id?: Id }) => {
    const D = Detail(
      Form,
      viewFields,
      { update, detail, deleteById, getOptions },
      redirectUrlDelete,
      showToggle,
      extras,
      detailColWidth,
      editTitle
    );

    return <Layout backUrl={backUrl} Detail={D} id={id} />;
  };

export default DetailWLayout;
