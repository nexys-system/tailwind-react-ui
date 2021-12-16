import React, {Fragment} from "../../../../../_snowpack/pkg/react.js";
import {Listbox, Transition} from "../../../../../_snowpack/pkg/@headlessui/react.js";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const Custom = ({
  value,
  onChange = (v) => console.log(`onChange not yet implemented, selected value: ${v}`),
  options,
  disabled
}) => {
  const selectedValue = options.find((x) => x.id === value);
  return /* @__PURE__ */ React.createElement(Listbox, {
    disabled,
    value: selectedValue,
    onChange: (v) => onChange(v && v.id)
  }, ({open}) => /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    className: "mt-1 relative"
  }, /* @__PURE__ */ React.createElement(Listbox.Button, {
    className: "relative w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "flex items-center"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "ml-3 block truncate"
  }, selectedValue ? selectedValue.name : "-")), /* @__PURE__ */ React.createElement("span", {
    className: "ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none"
  }, "SelectorIcon")), /* @__PURE__ */ React.createElement(Transition, {
    show: open,
    as: Fragment,
    leave: "transition ease-in duration-100",
    leaveFrom: "opacity-100",
    leaveTo: "opacity-0"
  }, /* @__PURE__ */ React.createElement(Listbox.Options, {
    static: true,
    className: "absolute z-10 mt-1 w-full bg-white shadow-lg max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm"
  }, options.map((person, i) => /* @__PURE__ */ React.createElement(Listbox.Option, {
    key: i,
    className: ({active}) => classNames(active ? "text-white bg-indigo-600" : "text-gray-900", "cursor-default select-none relative py-2 pl-3 pr-9"),
    value: person
  }, ({selected, active}) => /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    className: "flex items-center"
  }, /* @__PURE__ */ React.createElement("span", {
    className: classNames(selected ? "font-semibold" : "font-normal", "ml-3 block truncate")
  }, person.name)), selected ? /* @__PURE__ */ React.createElement("span", {
    className: classNames(active ? "text-white" : "text-indigo-600", "absolute inset-y-0 right-0 flex items-center pr-4")
  }, "CheckIcon") : null))))))));
};
export default Custom;
