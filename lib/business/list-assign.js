import React from "../../_snowpack/pkg/react.js";
import Checkbox from "../form/inputs/boolean/checkbox.js";
const Loader = (props) => {
  const {isLoading} = props;
  if (isLoading !== true) {
    return null;
  }
  return /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("i", null, "is being updated"));
};
const ListUnit = ({
  i,
  value,
  updatePromise
}) => {
  const [isChecked, setChecked] = React.useState(!!value.assigned);
  const [isLoading, setLoading] = React.useState(false);
  const [assigned, setAssigned] = React.useState(value.assigned);
  const handleClick = () => {
    if (isLoading === true) {
      console.warn("this action is blocked since the promise is still working");
    }
    setLoading(true);
    updatePromise(value.id, assigned).then((x) => {
      setChecked(!isChecked);
      setLoading(false);
      setAssigned(Boolean(x));
    });
  };
  return /* @__PURE__ */ React.createElement("li", {
    key: i,
    role: void 0
  }, /* @__PURE__ */ React.createElement(Checkbox, {
    value: isChecked,
    onChange: handleClick
  }), value.name, /* @__PURE__ */ React.createElement(Loader, {
    isLoading
  }));
};
const ListAssign = (props) => {
  const {data, updatePromise} = props;
  return /* @__PURE__ */ React.createElement("ul", null, data.map((value, i) => /* @__PURE__ */ React.createElement(ListUnit, {
    key: i,
    i,
    value,
    updatePromise
  })));
};
export default ListAssign;
