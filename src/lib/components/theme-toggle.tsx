import React, { useContext, useState } from "react";
import { AppContext, Types } from "../context-provider/theme/context";
import { Moon, Sun } from "../icons";

const Toggle = () => {
  const {
    state: { theme },
    dispatch,
  } = useContext(AppContext);
  const [isDark, setIsDark] = useState<boolean>(theme === "dark");

  const handleToggle = (t: "light" | "dark") => {
    setIsDark(!isDark);
    dispatch({ type: Types.Theme, payload: t });
  };

  if (isDark) {
    return (
      <span className="cursor-pointer" onClick={() => handleToggle("light")}>
        <Sun />
      </span>
    );
  }
  return (
    <span className="cursor-pointer" onClick={() => handleToggle("dark")}>
      <Moon />
    </span>
  );
};

const common =
  " mt-2 mr-1 text-coolGray-800 dark:text-white dark:hover:text-sky-500 cursor-pointer transition duration-500 ease-in-out hover:text-sky-500";
export default () => (
  <div className={common}>
    <Toggle />
  </div>
);
