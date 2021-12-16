import React from "../../../../../_snowpack/pkg/react.js";
import * as U from "./utils.js";
import Calendar from "./calendar.js";
import * as Labels from "./labels.js";
import {
  Calendar as CalendarIcon,
  ChevronLeft,
  ChevronRight
} from "../../../../icons/index.js";
const width = String(100 / 7) + "%";
const UI = ({
  onChange,
  value,
  disabled,
  formatOutput = U.formatOutDefault,
  formatOutProp = U.toISODate,
  labels = Labels.en
}) => {
  const today = new Date();
  const [showDatepicker, setShowDatepicker] = React.useState(false);
  const [date, setDate] = React.useState(value ? new Date(value) : void 0);
  const [yearSelector, setYearSelector] = React.useState(false);
  const observedDate = date || today;
  const c = new Calendar(observedDate);
  const handleSelectDay = (d) => {
    const date2 = c.getDateValue(d);
    const dateObject = new Date(date2);
    onChange(formatOutProp(dateObject));
    setShowDatepicker(false);
    setDate(dateObject);
  };
  const handleChange = (_v) => {
    return;
  };
  const toggleDatePicker = () => !disabled && setShowDatepicker(!showDatepicker);
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", {
    className: "mb-5 w-64"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "relative"
  }, /* @__PURE__ */ React.createElement("input", {
    readOnly: true,
    disabled,
    onClick: toggleDatePicker,
    onChange: handleChange,
    type: "text",
    value: date ? formatOutput(date) : "",
    className: "cursor-pointer w-full pl-4 pr-10 py-3 leading-none rounded-lg shadow-sm focus:outline-none focus:shadow-outline font-medium text-gray-600",
    placeholder: "Select date"
  }), /* @__PURE__ */ React.createElement("div", {
    onClick: toggleDatePicker,
    className: "absolute top-0 right-0 px-3 py-2 cursor-pointer"
  }, /* @__PURE__ */ React.createElement(CalendarIcon, null)), showDatepicker && /* @__PURE__ */ React.createElement("div", {
    className: "bg-white mt-12 rounded-lg shadow p-4 absolute top-0 left-0",
    style: {width: "17rem"}
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex justify-between items-center mb-2"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("span", {
    className: "text-lg font-bold text-gray-800"
  }, labels.months[c.month]), yearSelector && /* @__PURE__ */ React.createElement("button", {
    type: "button",
    className: "transition ease-in-out duration-100 inline-flex cursor-pointer hover:bg-gray-200 p-1 rounded-full",
    onClick: () => setDate(new Date(observedDate.setFullYear(observedDate.getFullYear() - 1)))
  }, /* @__PURE__ */ React.createElement(ChevronLeft, null)), /* @__PURE__ */ React.createElement("span", {
    onClick: () => setYearSelector(!yearSelector),
    className: "cursor-pointer ml-1 text-lg font-normal " + (yearSelector ? "text-blue-500" : "text-gray-600")
  }, c.year), yearSelector && /* @__PURE__ */ React.createElement("button", {
    type: "button",
    className: "transition ease-in-out duration-100 inline-flex cursor-pointer hover:bg-gray-200 p-1 rounded-full",
    onClick: () => setDate(new Date(observedDate.setFullYear(observedDate.getFullYear() + 1)))
  }, /* @__PURE__ */ React.createElement(ChevronRight, null))), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("button", {
    type: "button",
    className: "transition ease-in-out duration-100 inline-flex cursor-pointer hover:bg-gray-200 p-1 rounded-full",
    onClick: () => setDate(new Date(observedDate.setMonth(observedDate.getMonth() - 1)))
  }, /* @__PURE__ */ React.createElement(ChevronLeft, null)), /* @__PURE__ */ React.createElement("button", {
    type: "button",
    className: "transition ease-in-out duration-100 inline-flex cursor-pointer hover:bg-gray-200 p-1 rounded-full",
    onClick: () => setDate(new Date(observedDate.setMonth(observedDate.getMonth() + 1)))
  }, /* @__PURE__ */ React.createElement(ChevronRight, null)))), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-wrap mb-3 -mx-1"
  }, labels.days.map((day, i) => /* @__PURE__ */ React.createElement("div", {
    key: i,
    style: {width},
    className: "px-1"
  }, /* @__PURE__ */ React.createElement("div", {
    key: i,
    className: "text-gray-800 font-medium text-center text-xs"
  }, day)))), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-wrap -mx-1"
  }, c.blankdays.map((_blankDay, i) => /* @__PURE__ */ React.createElement("div", {
    key: i,
    style: {width},
    className: "text-center border p-1 border-transparent text-sm"
  })), c.no_of_days.map((day, i) => {
    const className = "cursor-pointer text-center text-sm leading-none rounded-full leading-loose transition ease-in-out duration-100 " + (c.isToday(day) ? "bg-blue-500 text-white" : "text-gray-700 hover:bg-blue-200");
    return /* @__PURE__ */ React.createElement("div", {
      key: i,
      style: {width},
      className: "px-1 mb-1"
    }, /* @__PURE__ */ React.createElement("div", {
      onClick: () => handleSelectDay(day),
      className
    }, day));
  })))))));
};
export default UI;
