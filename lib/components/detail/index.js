import React from "../../../_snowpack/pkg/react.js";
import Layout from "./layout.js";
import Detail from "./main.js";
const DetailWLayout = (Form, viewFields, {update, detail, deleteById, getOptions}, redirectUrlDelete, showToggle = true, detailColWidth, extras, editTitle) => ({backUrl, id}) => {
  const D = Detail(Form, viewFields, {update, detail, deleteById, getOptions}, redirectUrlDelete, showToggle, extras, detailColWidth, editTitle);
  return /* @__PURE__ */ React.createElement(Layout, {
    backUrl,
    Detail: D,
    id
  });
};
export default DetailWLayout;
