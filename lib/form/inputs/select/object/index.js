import React from "../../../../../_snowpack/pkg/react.js";
import Scalar from "../scalar/index.js";
const SelectObject = ({
  options,
  value,
  onChange
}) => {
  const handleChange = (v2) => {
    if (v2 === void 0) {
      return;
    }
    const f = options.find((o) => o.id === v2);
    if (f) {
      onChange(f);
    }
  };
  const v = value && value.id;
  return /* @__PURE__ */ React.createElement(Scalar, {
    options,
    value: v,
    onChange: handleChange
  });
};
export default SelectObject;
