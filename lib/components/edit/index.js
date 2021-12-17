import React from "../../../_snowpack/pkg/react.js";
import {useHistory} from "../../../_snowpack/pkg/react-router-dom.js";
const Edit = (Form, update, redirectUrl) => ({id, data: dataIn, formOptions, postUpdate}) => {
  const history = useHistory();
  const [isLoading, setIsLoading] = React.useState(false);
  const handleSubmit = async (data) => {
    setIsLoading(true);
    await update(data, id);
    redirectUrl && history.push(redirectUrl);
    postUpdate && postUpdate(data);
    setIsLoading(false);
  };
  return /* @__PURE__ */ React.createElement(Form, {
    isLoading,
    valueDefault: dataIn,
    onSuccess: handleSubmit,
    options: formOptions
  });
};
export default Edit;
