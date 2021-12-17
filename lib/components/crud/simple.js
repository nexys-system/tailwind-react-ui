import Crud from "./index.js";
const defDetailToDef = (defDetail) => defDetail.map((d) => ({
  name: d.name,
  uiType: d.uiType,
  optional: d.optional,
  label: d.label,
  render: d.render,
  sort: d.sort,
  filter: d.filter
}));
const defDetailToView = (defDetail) => defDetail.map((d) => [d.label || d.name, d.name]);
const CrudSimple = (defDetail, urlPrefix, crud, extras, options) => {
  const def = defDetailToDef(defDetail);
  const viewFields = defDetailToView(defDetail);
  return Crud(def, defDetail, viewFields, urlPrefix, crud, extras, options);
};
export default CrudSimple;
