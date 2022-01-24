import React from "react";

export default <A,>(props: {
  id: A;
  name: string;
  onSelect: (id: A) => void;
  icon?: JSX.Element;
}) => {
  const { id, name, icon, onSelect } = props;

  return (
    <li
      onClick={() => onSelect(id)}
      className={`flex flex-cols dark:hover:bg-coolGray-500 hover:bg-primary-100 py-2 px-4 block whitespace-no-wrap font-extralight dark:text-white`}
    >
      <span className="text-primary">{icon}</span>
      <span className="mr-3" />
      {name}
    </li>
  );
};
