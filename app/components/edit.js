import React from "../../_snowpack/pkg/react.js";
import PEdit from "../../lib/components/edit/index.js";
import Typography from "../../lib/components/typography.js";
import InputText from "../../lib/form/inputs/text.js";
const homeLink = "/";
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
const E = PEdit(Form, update, homeLink);
export const Edit = PEdit(Form, update);
export default () => /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Typography, {
  variant: "h2"
}, "Edit"), /* @__PURE__ */ React.createElement(E, {
  id: "myuuid",
  data: {name: "my default name"},
  postUpdate: () => console.log("s")
}));
