import React from "../../../_snowpack/pkg/react.js";
import {useParams} from "../../../_snowpack/pkg/react-router-dom.js";
import {LinkBack} from "../utils-ui.js";
import {getParamTyped} from "../../../_snowpack/pkg/@nexys/react-bootstrap/dist/headless/detail/utils.js";
export const DetailLayout2 = (title, detailColWidth, extras) => ({data, Detail}) => {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    className: "grid grid-cols-12 gap-4"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "col-span-" + detailColWidth
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "text-xl p-2"
  }, title), /* @__PURE__ */ React.createElement(Detail, null)), extras && extras.map((ExtraUnit2, i) => /* @__PURE__ */ React.createElement("div", {
    key: i,
    className: "col-span-" + (ExtraUnit2.colSpan || 6)
  }, /* @__PURE__ */ React.createElement(ExtraUnit2.Component, {
    data
  })))));
};
const getId = (paramType, givenId) => {
  if (givenId) {
    return givenId;
  }
  const {id} = useParams();
  return getParamTyped(paramType, id);
};
const DetailLayout = ({
  backUrl,
  Detail,
  id,
  paramType = "number"
}) => {
  const nid = getId(paramType, id);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Detail, {
    id: nid
  }), backUrl && /* @__PURE__ */ React.createElement("div", {
    className: "row"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "col-md-12"
  }, /* @__PURE__ */ React.createElement(LinkBack, {
    link: backUrl
  }))));
};
export default DetailLayout;
