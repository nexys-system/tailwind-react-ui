import React, {useState} from "../../../../../_snowpack/pkg/react.js";
import Input from "../../text.js";
import MenuWrapper from "../../../../components/popup-menu.js";
import MenuItem from "./menu-item.js";
export default (props) => {
  const {open, onSelect, onCancel, enableSearch = false} = props;
  const [search, setSearch] = useState("");
  const [options, setOptions] = useState(props.options);
  const handleSearch = (v) => {
    setSearch(v || "");
    setOptions([...props.options].filter((o) => v === "" || !v || o.name.trim().toLowerCase().startsWith(search.trim().toLowerCase())));
  };
  return /* @__PURE__ */ React.createElement(MenuWrapper, {
    open,
    onCancel,
    position: "top-10 left-0"
  }, /* @__PURE__ */ React.createElement(React.Fragment, null, enableSearch && /* @__PURE__ */ React.createElement(Input, {
    value: search,
    onChange: handleSearch,
    placeholder: "Search..."
  }), options.map((o, i) => /* @__PURE__ */ React.createElement(MenuItem, {
    ...o,
    key: i,
    onSelect: (v) => {
      setSearch("");
      setOptions(props.options);
      onSelect(v);
    }
  }))));
};
