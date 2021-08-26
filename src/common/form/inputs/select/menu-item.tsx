import React from "react";

export default <A extends number | string | undefined>(props: {
  id: A;
  name: string;
  onSelect: (id: A) => void;
  icon?: JSX.Element;
}) => {
  const { id, name, icon, onSelect } = props;

  return (
    <li
      onClick={() => onSelect(id)}
      className={`flex flex-cols dark:hover:bg-coolGray-500 hover:bg-sky-100 py-2 px-4 block whitespace-no-wrap font-extralight dark:text-white`}
    >
      <span className="text-sky-500">{icon}</span>
      <span className="mr-3" />
      {name}
    </li>
  );
};
