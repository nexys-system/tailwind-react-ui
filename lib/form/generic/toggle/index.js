import React, {useState} from "../../../../_snowpack/pkg/react.js";
import {Close, Edit} from "../../../icons/index.js";
import Form from "../form/index.js";
const ActionButtonWrapper = (props) => {
  const {children, onClick} = props;
  return /* @__PURE__ */ React.createElement("div", {
    className: "w-full text-right text-primary cursor-pointer",
    onClick
  }, children);
};
export default ({
  def,
  onSubmit,
  View,
  data: defaultData
}) => {
  const [isEdit, setEdit] = useState(false);
  const [data, setData] = useState(defaultData);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState(void 0);
  const handleSubmit = (d) => {
    setLoading(true);
    setData(d);
    onSubmit(d).then((_) => {
      setEdit(false);
      setLoading(false);
      setErrors(void 0);
    }, (err) => {
      setLoading(false);
      setErrors(err);
    });
  };
  return /* @__PURE__ */ React.createElement(React.Fragment, null, isEdit ? /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(ActionButtonWrapper, {
    onClick: () => setEdit(false)
  }, /* @__PURE__ */ React.createElement(Close, null)), /* @__PURE__ */ React.createElement(Form, {
    valueDefault: data,
    formDef: def,
    onSuccess: handleSubmit,
    isLoading: loading,
    errors
  })) : /* @__PURE__ */ React.createElement(React.Fragment, null, " ", /* @__PURE__ */ React.createElement(ActionButtonWrapper, {
    onClick: () => setEdit(true)
  }, /* @__PURE__ */ React.createElement(Edit, null)), /* @__PURE__ */ React.createElement(View, {
    data
  })));
};
