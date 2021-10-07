import React, {useState} from "../../_snowpack/pkg/react.js";
import Pill from "../../lib/components/pills/main.js";
import * as C from "../../lib/components/type.js";
export default () => {
  const [selected, setSelected] = useState(null);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("h1", null, "Pill"), /* @__PURE__ */ React.createElement(Pill, {
    id: 1,
    title: "Pill primary",
    badge: "A",
    color: C.ContextColor.primary,
    selected: selected === 1,
    onSelect: () => setSelected(1)
  }), /* @__PURE__ */ React.createElement(Pill, {
    id: 2,
    title: "Pill secondary",
    badge: "B",
    color: C.ContextColor.secondary,
    selected: selected === 2,
    onSelect: () => setSelected(2)
  }), /* @__PURE__ */ React.createElement(Pill, {
    id: 2,
    title: "Pill info",
    badge: "C",
    color: C.ContextColor.info,
    selected: selected === 3,
    onSelect: () => setSelected(3)
  }), /* @__PURE__ */ React.createElement(Pill, {
    id: 4,
    title: "Pill success",
    badge: "A",
    color: C.ContextColor.success,
    selected: selected === 4,
    onSelect: () => setSelected(4)
  }), /* @__PURE__ */ React.createElement(Pill, {
    id: 5,
    title: "Pill warning",
    badge: "B",
    color: C.ContextColor.warning,
    selected: selected === 5,
    onSelect: () => setSelected(5)
  }), /* @__PURE__ */ React.createElement(Pill, {
    id: 6,
    title: "Pill error",
    badge: "C",
    color: C.ContextColor.error,
    selected: selected === 6,
    onSelect: () => setSelected(6)
  }));
};
