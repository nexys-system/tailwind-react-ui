import { contextBdRadius } from "../type";
import { PillStyle } from "./type";

export const getPillClasses = (
  { color, rounded }: PillStyle,
  selected: boolean,
  fullWidth: boolean = true
): string[] => {
  const basic = [
    "cursor-pointer leading-none inline-flex items-center m-1",
    "dark:text-white  p-2 shadow font-extralight",

    rounded ? contextBdRadius[rounded] : "rounded-surface",
  ];
  const border = [`border border-${color} dark:border-${color}-700`];
  const bg = [
    selected
      ? `bg-${color}-500 dark:bg-${color}-700 text-white hover:bg-${color}-400 dark:hover:bg-${color}-600`
      : `bg-white dark:bg-${color}-500  hover:bg-${color}-100 dark:hover:bg-${color}-400`,
  ];
  const width = [`${fullWidth && "w-full"}`];

  console.log(basic);
  console.log(rounded);
  return [...basic, ...border, ...bg, ...width];
};
