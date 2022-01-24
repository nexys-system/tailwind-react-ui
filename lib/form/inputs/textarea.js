import React from "../../../_snowpack/pkg/react.js";
const Textarea = ({
  value,
  onChange,
  disabled,
  placeholder
}) => {
  const handleChange = (v) => {
    const {value: value2} = v.target;
    if (value2 === "") {
      return onChange(void 0);
    }
    return onChange(value2);
  };
  return /* @__PURE__ */ React.createElement("textarea", {
    className: "resize-y border rounded-md w-full py-2 px-3",
    placeholder,
    disabled,
    onChange: handleChange,
    value
  });
};
export default Textarea;
