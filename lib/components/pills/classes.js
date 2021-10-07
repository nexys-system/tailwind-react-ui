export const getPillClasses = ({color}, selected, fullWidth = true) => {
  const basic = [
    "cursor-pointer leading-none inline-flex items-center m-1",
    "dark:text-white rounded-full p-2 shadow font-extralight"
  ];
  const border = [`border border-${color} dark:border-${color}-700`];
  const bg = [
    selected ? `bg-${color}-500 dark:bg-${color}-700 text-white hover:bg-${color}-400 dark:hover:bg-${color}-600` : `bg-white dark:bg-${color}-500  hover:bg-${color}-100 dark:hover:bg-${color}-400`
  ];
  const width = [`${fullWidth && "w-full"}`];
  return [...basic, ...border, ...bg, ...width];
};
