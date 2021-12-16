import React from "../../../_snowpack/pkg/react.js";
import Simple from "./simple.js";
const Nav = ({
  navs,
  option = 0
}) => {
  const [selected, setSelected] = React.useState(option);
  const NavHeader = Simple(navs);
  const navSelected = navs[selected];
  if (!navSelected) {
    throw Error("selected item does not exist");
  }
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(NavHeader, {
    option: selected,
    onClick: (i) => setSelected(i)
  }), navSelected.Component);
};
export default Nav;
