import React, {createContext, useReducer} from "../../_snowpack/pkg/react.js";
import {reducer} from "./reducer.js";
import {Types} from "./type.js";
export const initData = {
  message: void 0,
  theme: window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
};
const AppContext = createContext({
  state: initData,
  dispatch: () => null
});
const AppProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initData);
  const value = {state, dispatch};
  return /* @__PURE__ */ React.createElement(AppContext.Provider, {
    value
  }, children);
};
export {AppContext, AppProvider, Types};
