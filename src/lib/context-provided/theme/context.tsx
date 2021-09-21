import React, { createContext, useReducer } from "react";
import { reducer } from "./reducer";
import { Data, Types, Actions } from "./type";

export const initData: Data = {
  theme: window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light",
};

const AppContext = createContext<{
  state: Data;
  dispatch: React.Dispatch<Actions>;
}>({
  state: initData,
  dispatch: () => null,
});

const AppProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initData);
  const value = { state, dispatch };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export { AppContext, AppProvider, Types };
