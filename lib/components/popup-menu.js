import React, {useEffect, useRef} from "../../_snowpack/pkg/react.js";
const useOutsideAlerter = (ref, onClickOutside) => {
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        onClickOutside();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
};
export default (props) => {
  const {open, onCancel, position = "z-10 w-64 right-5 -top-16"} = props;
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, () => onCancel());
  return /* @__PURE__ */ React.createElement("div", {
    ref: wrapperRef,
    className: `z-99 ${open ? "opacity-100" : "opacity-0"}
      ${open ? "visible" : "invisible"}`
  }, /* @__PURE__ */ React.createElement("ul", {
    className: `
        max-h-80 overflow-auto
        cursor-pointer
        transition-opacity duration-500 
        ${position} 
        bg-white dark:bg-coolGray-700 
        absolute shadow-2xl 
        ${open ? "opacity-100" : "opacity-0"}
        ${open ? "visible" : "invisible"}`
  }, props.children));
};
