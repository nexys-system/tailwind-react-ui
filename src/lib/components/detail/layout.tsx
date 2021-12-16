import React from "react";
import { useParams } from "react-router-dom";

import { LinkBack } from "../utils-ui";
import * as T from "@nexys/react-bootstrap/dist/headless/detail/type";
import { getParamTyped } from "@nexys/react-bootstrap/dist/headless/detail/utils";
import { ExtraUnit } from "@nexys/react-bootstrap/dist/headless/crud/type";

export const DetailLayout2 =
  <A,>(
    title: string,
    detailColWidth: number,

    extras?: ExtraUnit<A>[]
  ) =>
  ({ data, Detail }: { data: A; Detail: () => JSX.Element }) => {
    return (
      <>
        <div className="grid grid-cols-12 gap-4">
          <div className={"col-span-" + detailColWidth}>
            <h2 className={"text-xl p-2"}>{title}</h2>

            <Detail />
          </div>

          {extras &&
            extras.map((ExtraUnit, i) => (
              <div key={i} className={"col-span-" + (ExtraUnit.colSpan || 6)}>
                <ExtraUnit.Component data={data} />
              </div>
            ))}
        </div>
      </>
    );
  };

const getId = <Id,>(paramType: T.ParamType, givenId?: Id): Id => {
  if (givenId) {
    return givenId;
  }

  const { id } = useParams<{ id?: string }>();

  return getParamTyped<Id>(paramType, id);
};

const DetailLayout = <Id,>({
  backUrl,
  Detail,
  id,
  paramType = "number",
}: T.DetailLayoutProps<Id> & { id?: Id; paramType?: T.ParamType }) => {
  const nid = getId(paramType, id);

  return (
    <>
      <Detail id={nid} />

      {backUrl && (
        <div className="row">
          <div className="col-md-12">
            <LinkBack link={backUrl} />
          </div>
        </div>
      )}
    </>
  );
};

export default DetailLayout;
