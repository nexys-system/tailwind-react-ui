import React, {useState} from "../../_snowpack/pkg/react.js";
import Spinner from "./loader/circular.js";
import {ChevronUp} from "../icons/index.js";
export default ({promise}) => {
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    setLoading(true);
    if (!e.target || !e.target.files) {
      throw Error("file is undefined");
    }
    const {files} = e.target;
    const fileArray = Array.from(files);
    if (fileArray.length === 0) {
      throw Error("file array is empty");
    }
    const file = fileArray[0];
    promise(file).then(() => {
    }).catch((err) => {
    }).finally(() => {
      setLoading(false);
    });
  };
  return /* @__PURE__ */ React.createElement("label", {
    className: "items-center px-5 py-3 rounded-full shadow-lg tracking-wide uppercase cursor-pointer bg-primary text-white"
  }, loading ? /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Spinner, null), " Loading") : /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(ChevronUp, null), " ", /* @__PURE__ */ React.createElement("span", {
    className: "mt-2 text-base leading-normal"
  }, "Select a file"), /* @__PURE__ */ React.createElement("input", {
    type: "file",
    className: "hidden",
    onChange: handleChange
  })));
};
