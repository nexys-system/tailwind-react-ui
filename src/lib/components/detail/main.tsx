import React from "react";

import ToggleGeneric from "../toggle";
import ViewGeneric from "../view";
import { ViewField } from "@nexys/react-bootstrap/dist/headless/view/type";
import EditGeneric from "../edit";
import DeleteGeneric from "../delete";
import WLoader from "../data-load";
import {
  FormOptionsMap,
  FormProps,
} from "@nexys/react-bootstrap/dist/headless/form/type";
import { CrudRequestDetail } from "@nexys/react-bootstrap/dist/headless/detail/type";
import { EditProps } from "@nexys/react-bootstrap/dist/headless/edit/type";
import { ExtraUnit } from "@nexys/react-bootstrap/dist/headless/crud/type";
import { DetailLayout2 } from "./layout";

const Detail = <Id, A extends { id: Id }>(
  Form: (a: FormProps<A>) => JSX.Element,
  viewFields: ViewField<A>[],
  { update, detail, deleteById, getOptions }: CrudRequestDetail<A, Id>,
  redirectUrlDelete: string,
  showToggle: boolean = true,
  extras?: ExtraUnit<A>[],
  detailColWidth: number = 6,
  editTitle?: string
) => {
  // merge different promises to have all in the same functions
  const detailWOptions = async (
    id: Id
  ): Promise<{ data: A; options: FormOptionsMap<A> }> => {
    const data = await detail(id);
    const options: FormOptionsMap<A> = getOptions
      ? await getOptions()
      : new Map();

    return { data, options };
  };

  const Delete = deleteById
    ? DeleteGeneric<Id>(deleteById, redirectUrlDelete)
    : () => <></>;

  // define final view based on options chosen
  const Main = getMain(showToggle, viewFields, Form, update);

  getOptions && getOptions();

  const DetailLayoutInner = DetailLayout2(
    editTitle || "",
    detailColWidth,
    extras
  );

  const EditLoader = ({ id }: { id: Id }) =>
    WLoader<{ data: A; options?: FormOptionsMap<A> }>({
      Component: ({
        data,
      }: {
        data: { data: A; options?: FormOptionsMap<A> };
      }) => {
        const MainDetail: JSX.Element = (
          <>
            <Main id={id} data={data.data} formOptions={data.options} /> &nbsp;
            <Delete id={id} />
          </>
        );

        return <DetailLayoutInner data={data.data} Detail={() => MainDetail} />;
      },
      getData: () => detailWOptions(id),
    });

  return ({ id }: { id: Id }) => <EditLoader id={id} />;
};

const getMain = <A, Id>(
  showToggle: boolean,
  viewFields: ViewField<A>[],
  Form: (a: FormProps<A>) => JSX.Element,
  update?: (data: Partial<A>, id: Id) => Promise<void>
): ((a: EditProps<A, Id>) => JSX.Element) => {
  const View = ViewGeneric<A>(viewFields);
  if (!update) {
    return View;
  }

  const Edit = EditGeneric<A, Id>(Form, update);

  if (showToggle) {
    return ToggleGeneric<A, Id>(Edit, View);
  }

  return Edit;
};

export default Detail;
