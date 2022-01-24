import React, {useContext, useState} from "../../_snowpack/pkg/react.js";
import {AppContext, Types} from "../context-provider/theme/context.js";
import {Moon, Sun} from "../icons/index.js";
const Toggle = () => {
  const {
    state: {theme},
    dispatch
  } = useContext(AppContext);
  const [isDark, setIsDark] = useState(theme === "dark");
  const handleToggle = (t) => {
    setIsDark(!isDark);
    dispatch({type: Types.Theme, payload: t});
  };
  if (isDark) {
    return /* @__PURE__ */ React.createElement("span", {
      className: "cursor-pointer",
      onClick: () => handleToggle("light")
    }, /* @__PURE__ */ React.createElement(Sun, null));
  }
  return /* @__PURE__ */ React.createElement("span", {
    className: "cursor-pointer",
    onClick: () => handleToggle("dark")
  }, /* @__PURE__ */ React.createElement(Moon, null));
};
const common = " mt-2 mr-1 text-coolGray-800 dark:text-white dark:hover:text-primary cursor-pointer transition duration-500 ease-in-out hover:text-primary-300";
export default () => /* @__PURE__ */ React.createElement("div", {
  className: common
}, /* @__PURE__ */ React.createElement(Toggle, null));
