import React from "react";
import { useHistory } from "react-router-dom";

import Layout from "../../view/layout";
import View from "./view";
import Form from "./form";

import {
  Edit as PencilIcon,
  DoubleChevronRight as DeleteIcon,
  XCircle as XCircleIcon,
} from "../../../icons/";

import { ToggleProps } from "./type";

const Toggle = <A,>({
  data: dataIn,
  title,
  subtitle,
  update,
  onDelete,
  formDef,
}: ToggleProps<A>) => {
  const history = useHistory();
  const [isForm, setForm] = React.useState<boolean>(false);
  const [data, setData] = React.useState<A>(dataIn);

  const handleSuccess = async (data: A) => {
    await update(data);

    setForm(false);
    setData(data);

    return;
  };

  const actions = [];

  if (!isForm) {
    actions.push({
      name: (
        <PencilIcon
          className={
            "text-primary hover:text-green-400 transition ease-in-out duration-500"
          }
        />
      ),
      onClick: () => setForm(!isForm),
    });

    if (onDelete) {
      actions.push({
        name: (
          <DeleteIcon
            className={
              "text-primary hover:text-green-400 transition ease-in-out duration-500"
            }
          />
        ),
        onClick: () => {
          if (confirm("are you sure you wouyld like to delete this entry")) {
            onDelete().then(
              (x) => x.urlRedirect && history.push(x.urlRedirect)
            );
          }
        },
      });
    }
  }

  if (isForm) {
    actions.push({
      name: (
        <XCircleIcon className="text-primary hover:text-green-400 transition ease-in-out duration-500" />
      ),
      onClick: () => setForm(false),
    });
  }

  return (
    <Layout title={title} subtitle={subtitle} actions={actions}>
      {isForm ? (
        <Form<A> formDef={formDef} data={data} onSuccess={handleSuccess} />
      ) : (
        !isForm && <View<A> formDef={formDef} data={data} />
      )}
    </Layout>
  );
};

export default Toggle;
