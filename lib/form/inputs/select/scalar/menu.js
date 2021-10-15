import React, {useState} from "../../../../../_snowpack/pkg/react.js";
import MenuWrapper from "../../../../components/popup-menu.js";
import MenuItem from "./menu-item.js";
export default (props) => {
  const {open, onSelect, onCancel, searchString} = props;
  const [options, setOptions] = useState(props.options);
  const filteredOptions = options.filter((o) => !searchString || o.name.trim().toLowerCase().includes(searchString.trim().toLowerCase()));
  return /* @__PURE__ */ React.createElement(MenuWrapper, {
    open,
    onCancel,
    position: "top-10 left-0"
  }, /* @__PURE__ */ React.createElement(React.Fragment, null, filteredOptions.length === 0 && /* @__PURE__ */ React.createElement("li", {
    className: `flex flex-cols dark:hover:bg-coolGray-500 hover:bg-sky-100 py-2 px-4 block whitespace-no-wrap font-extralight dark:text-white`
  }, /* @__PURE__ */ React.createElement("i", null, "No item found")), filteredOptions.map((o, i) => /* @__PURE__ */ React.createElement(MenuItem, {
    ...o,
    key: i,
    onSelect: (v) => {
      setOptions(props.options);
      onSelect(v);
    }
  }))));
};
