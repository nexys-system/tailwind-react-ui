import React from "react";

type Value = { id: number | string; name: string };
export default (props: {
  v: Value;

  onSelect: (v: Value) => void;
  icon?: JSX.Element;
}) => {
  const { v, icon, onSelect } = props;
  return (
    <li
      onClick={() => onSelect(v)}
      className={`flex flex-cols dark:hover:bg-coolGray-500 hover:bg-primary-100 py-2 px-4 block whitespace-no-wrap font-extralight dark:text-white`}
    >
      <span className="text-primary">{icon}</span>
      <span className="mr-3" />
      {v.name}
    </li>
  );
};
