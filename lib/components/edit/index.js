import React from "../../../_snowpack/pkg/react.js";
import {useHistory} from "../../../_snowpack/pkg/react-router-dom.js";
const Edit = (Form, update, redirectUrl) => ({id, data: dataIn, formOptions, postUpdate}) => {
  const history = useHistory();
  const handleSubmit = async (data) => {
    console.log("before update");
    await update(data, id);
    console.log("after update");
    redirectUrl && history.push(redirectUrl);
    postUpdate && postUpdate(data);
  };
  return /* @__PURE__ */ React.createElement(Form, {
    valueDefault: dataIn,
    onSuccess: handleSubmit,
    options: formOptions
  });
};
export default Edit;
