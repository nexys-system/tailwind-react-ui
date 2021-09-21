import React, {useState} from "../../_snowpack/pkg/react.js";
import Pill from "../../lib/components/pill.js";
export default () => {
  const [selected, setSelected] = useState(null);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("h1", null, "Pill"), /* @__PURE__ */ React.createElement(Pill, {
    id: 1,
    title: "Pill one",
    badge: "A",
    color: "blue",
    selected: selected === 1,
    onSelect: () => setSelected(1)
  }), /* @__PURE__ */ React.createElement(Pill, {
    id: 2,
    title: "Pill two",
    badge: "B",
    color: "rose",
    selected: selected === 2,
    onSelect: () => setSelected(2)
  }), /* @__PURE__ */ React.createElement(Pill, {
    id: 2,
    title: "Pill three",
    badge: "C",
    color: "purple",
    selected: selected === 3,
    onSelect: () => setSelected(3)
  }));
};
