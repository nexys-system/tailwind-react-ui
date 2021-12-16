import React from "../../../_snowpack/pkg/react.js";
import * as U from "../../../_snowpack/pkg/@nexys/utils.js";
import * as FormGenerator from "../../../lib/components/form/generic/generator/index.js";
import {
  FormType
} from "../../../_snowpack/pkg/@nexys/react-bootstrap/dist/headless/form/type.js";
import {ContextProvider} from "../../../lib/index.js";
const {
  Notification: {Context, Type, Provider}
} = ContextProvider;
var DataCategory;
(function(DataCategory2) {
  DataCategory2[DataCategory2["one"] = 1] = "one";
  DataCategory2[DataCategory2["two"] = 2] = "two";
  DataCategory2[DataCategory2["three"] = 3] = "three";
})(DataCategory || (DataCategory = {}));
const isA = (x) => typeof x === "number";
const dataCategoryOptions = Object.values(DataCategory).filter(isA).map((id) => ({id, name: DataCategory[id]}));
const def = [
  {label: "Name", name: "name", uiType: FormType.Text, optional: false},
  {name: "age", label: "Age", uiType: FormType.Number, optional: false},
  {
    name: "cat",
    label: "Category",
    uiType: FormType.Select,
    optional: false,
    options: dataCategoryOptions
  },
  {
    name: "catObject",
    label: "Category 2",
    uiType: FormType.SelectObject,
    optional: false,
    options: [
      {id: 1, name: "cat #1"},
      {id: 2, name: "cat #2"}
    ]
  },
  {
    name: "isAccept",
    label: "Accept conditions",
    uiType: FormType.Switch,
    optional: false
  }
];
export const F = FormGenerator.FormWDef(def);
const FormWContext = ({
  valueDefault = {}
}) => {
  const [isLoading, setLoading] = React.useState(false);
  const {setNotification} = Context.useToastContext();
  const onSuccess = async (d) => {
    setLoading(true);
    await U.promise.delay(2e3);
    setNotification({
      text: "success",
      type: Type.NotificationType.toast,
      messageType: Type.MessageType.success
    });
    setLoading(false);
    return Promise.resolve();
  };
  return /* @__PURE__ */ React.createElement(F, {
    valueDefault,
    onSuccess,
    isLoading
  });
};
export default ({valueDefault}) => /* @__PURE__ */ React.createElement(Provider, null, /* @__PURE__ */ React.createElement(FormWContext, {
  valueDefault
}));
