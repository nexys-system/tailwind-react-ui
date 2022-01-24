import React, {useState} from "../../../_snowpack/pkg/react.js";
import ReactDOM from "../../../_snowpack/pkg/react-dom.js";
import Button from "../buttons/main.js";
import Modal from "./index.js";
const Dialog = (props) => {
  const [isOpen, setIsOpen] = useState(props.isOpen);
  const handleConfirm = () => {
    setIsOpen(false);
    props.resolve();
  };
  const handleCancel = () => {
    props.reject();
    setIsOpen(false);
  };
  return /* @__PURE__ */ React.createElement(Modal, {
    open: isOpen
  }, /* @__PURE__ */ React.createElement("div", {
    className: "p-3 font-extralight"
  }, props.message), /* @__PURE__ */ React.createElement("hr", null), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement(Button, {
    onClick: handleConfirm
  }, "Confirm"), " ", /* @__PURE__ */ React.createElement(Button, {
    variant: "transparent",
    onClick: handleCancel
  }, "Cancel")));
};
const confirm = ({message}) => {
  const wrapper = document.body.appendChild(document.createElement("div"));
  const close = () => {
    ReactDOM.unmountComponentAtNode(wrapper);
    wrapper.remove();
  };
  const promise = new Promise((resolve, reject) => {
    const props = {message, isOpen: true, resolve, reject};
    ReactDOM.render(React.createElement(Dialog, props), wrapper);
  });
  return promise.then((_) => close(), (res) => {
    close();
    return Promise.reject(res);
  });
};
export default confirm;
