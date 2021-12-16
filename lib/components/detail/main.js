import React from "../../../_snowpack/pkg/react.js";
import ToggleGeneric from "../toggle/index.js";
import ViewGeneric from "../view/index.js";
import EditGeneric from "../edit/index.js";
import DeleteGeneric from "../delete.js";
import WLoader from "../data-load/index.js";
import {DetailLayout2} from "./layout.js";
const Detail = (Form, viewFields, {update, detail, deleteById, getOptions}, redirectUrlDelete, showToggle = true, extras, detailColWidth = 6, editTitle) => {
  const detailWOptions = async (id) => {
    const data = await detail(id);
    const options = getOptions ? await getOptions() : new Map();
    return {data, options};
  };
  const Delete = deleteById ? DeleteGeneric(deleteById, redirectUrlDelete) : () => /* @__PURE__ */ React.createElement(React.Fragment, null);
  const Main = getMain(showToggle, viewFields, Form, update);
  getOptions && getOptions();
  const DetailLayoutInner = DetailLayout2(editTitle || "", detailColWidth, extras);
  const EditLoader = ({id}) => WLoader({
    Component: ({
      data
    }) => {
      const MainDetail = /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Main, {
        id,
        data: data.data,
        formOptions: data.options
      }), "  ", /* @__PURE__ */ React.createElement(Delete, {
        id
      }));
      return /* @__PURE__ */ React.createElement(DetailLayoutInner, {
        data: data.data,
        Detail: () => MainDetail
      });
    },
    getData: () => detailWOptions(id)
  });
  return ({id}) => /* @__PURE__ */ React.createElement(EditLoader, {
    id
  });
};
const getMain = (showToggle, viewFields, Form, update) => {
  const View = ViewGeneric(viewFields);
  if (!update) {
    return View;
  }
  const Edit = EditGeneric(Form, update);
  if (showToggle) {
    return ToggleGeneric(Edit, View);
  }
  return Edit;
};
export default Detail;
