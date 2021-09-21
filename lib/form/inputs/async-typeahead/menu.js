import React, {useEffect, useState} from "../../../../_snowpack/pkg/react.js";
import MenuWrapper from "../../../components/popup-menu.js";
import MenuItem from "./menu-item.js";
export default (props) => {
  const {open, onSelect, onCancel} = props;
  const [options, setOptions] = useState(props.options);
  useEffect(() => {
    setOptions([...props.options]);
  }, [props.options]);
  return /* @__PURE__ */ React.createElement(MenuWrapper, {
    open,
    onCancel
  }, /* @__PURE__ */ React.createElement(React.Fragment, null, options.map((o) => /* @__PURE__ */ React.createElement(MenuItem, {
    ...o,
    v: o,
    key: o.id,
    onSelect: (v) => {
      onSelect(v);
    }
  }))));
};
