import React from "../../../../_snowpack/pkg/react.js";
import {Popover, ArrowContainer} from "../../../../_snowpack/pkg/react-tiny-popover.js";
import * as Icons from "../../../icons/index.js";
export default (props) => {
  const {isActive, onReset} = props;
  const [anchorEl, setAnchorEl] = React.useState(void 0);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(void 0);
  };
  const open = Boolean(anchorEl);
  return /* @__PURE__ */ React.createElement(Popover, {
    isOpen: open,
    positions: ["bottom"],
    padding: 10,
    onClickOutside: () => handleClose(),
    ref: anchorEl,
    content: ({position, childRect, popoverRect}) => /* @__PURE__ */ React.createElement(ArrowContainer, {
      position,
      childRect,
      popoverRect,
      arrowColor: "white",
      arrowSize: 10,
      arrowStyle: {opacity: 0.7},
      className: "popover-arrow-container",
      arrowClassName: "popover-arrow"
    }, /* @__PURE__ */ React.createElement("div", {
      className: "bg-white p-5 shadow-md max-h-64 overflow-scroll"
    }, props.children))
  }, /* @__PURE__ */ React.createElement("span", null, /* @__PURE__ */ React.createElement("button", {
    onClick: handleClick
  }, /* @__PURE__ */ React.createElement(Icons.Filter, {
    className: `${props.isActive && "text-primary"}`
  })), isActive && /* @__PURE__ */ React.createElement("button", {
    onClick: () => onReset(),
    "data-testid": "reset-button"
  }, /* @__PURE__ */ React.createElement(Icons.XCircle, null))));
};
