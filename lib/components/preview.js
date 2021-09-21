import React from "../../_snowpack/pkg/react.js";
import NUtils from "../../_snowpack/pkg/@nexys/utils.js";
const widthDefault = 150;
export const getIsImage = (contentType) => contentType.slice(0, 5) === "image";
export const getIsPdf = (contentType) => contentType === "application/pdf";
const Label = (props) => {
  const {file, onRemove, hideLabel} = props;
  if (hideLabel) {
    return null;
  }
  return /* @__PURE__ */ React.createElement(React.Fragment, null, file.name.length > 25 ? file.name.substr(0, 25) + "..." : file.name, "  ", /* @__PURE__ */ React.createElement("small", null, /* @__PURE__ */ React.createElement("i", null, NUtils.string.formatSize(file.size))));
};
const Display = ({file, onSend, width = widthDefault, height}) => {
  const [sendDisabled, setSendDisabled] = React.useState(false);
  const {name, type} = file;
  const isImage = getIsImage(type);
  const isPdf = getIsPdf(type);
  if (!isImage && !isPdf) {
    return /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("i", null, "No preview available"));
  }
  const objectUrl = URL.createObjectURL(file);
  const handleSend = async () => {
    setSendDisabled(true);
    const pfileBuffer = file.arrayBuffer();
    pfileBuffer.then((fileBuffer) => {
      const b64 = NUtils.buffer.arrayBufferTo64(fileBuffer);
      onSend && onSend(b64).then((x) => setSendDisabled(false));
    });
  };
  return /* @__PURE__ */ React.createElement(React.Fragment, null, isImage && /* @__PURE__ */ React.createElement("img", {
    style: {boxShadow: "0 0 5px 0 rgba(0, 0, 0, 0.5)"},
    alt: name,
    width,
    height,
    src: objectUrl
  }), isPdf && /* @__PURE__ */ React.createElement("iframe", {
    title: name,
    src: objectUrl,
    width,
    height: "200"
  }), onSend && /* @__PURE__ */ React.createElement("button", {
    onClick: handleSend,
    disabled: sendDisabled
  }, "Send"));
};
export default (props) => {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Label, {
    ...props
  }), /* @__PURE__ */ React.createElement("br", null), !props.hidePreview && /* @__PURE__ */ React.createElement(Display, {
    ...props
  }));
};
