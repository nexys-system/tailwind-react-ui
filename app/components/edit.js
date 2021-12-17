import React from "../../_snowpack/pkg/react.js";
import PEdit from "../../lib/components/edit/index.js";
import Typography from "../../lib/components/typography.js";
import InputText from "../../lib/form/inputs/text.js";
import {ContextProvider} from "../../lib/index.js";
const {
  Notification: {Context, Type}
} = ContextProvider;
const Form = ({valueDefault, onSuccess}) => {
  const [value, setValue] = React.useState(valueDefault);
  const handleSubmit = (e) => {
    e.preventDefault();
    onSuccess(value);
  };
  return /* @__PURE__ */ React.createElement("form", {
    onSubmit: handleSubmit
  }, /* @__PURE__ */ React.createElement(InputText, {
    value: value.name,
    onChange: (name) => setValue({...value, name})
  }), /* @__PURE__ */ React.createElement("button", {
    type: "submit",
    className: "rounded text-primary border border-primary p-2"
  }, "Submit"));
};
const update = async (_data) => Promise.resolve(void 0);
export const Edit = PEdit(Form, update);
const EditFinal = () => {
  const {setNotification} = Context.useToastContext();
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Typography, {
    variant: "h2"
  }, "Edit"), /* @__PURE__ */ React.createElement(Edit, {
    id: "myuuid",
    data: {name: "my default name"},
    postUpdate: () => setNotification({
      text: "hello",
      type: Type.NotificationType.toast,
      messageType: Type.MessageType.info
    })
  }));
};
export default EditFinal;
