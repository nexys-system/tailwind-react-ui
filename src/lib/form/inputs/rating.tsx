import React from "react";

import { InputProps } from "../../form/type";
import { Star } from "../../icons";

export type Rating = 1 | 2 | 3 | 4 | 5;
const ratings: Rating[] = [1, 2, 3, 4, 5];

export default ({
  value: valueProps,
  onChange,
  disabled,
}: InputProps<Rating>) => {
  const [value, setValue] = React.useState<Rating | undefined>(valueProps);

  const handleChange = (v?: Rating) => {
    if (disabled) {
      return;
    }

    setValue(v);
    onChange(v);
  };

  return (
    <span>
      {ratings.map((r, i) => {
        const sClass =
          !value || value < r
            ? "text-coolGray-300 hover:text-coolGray-400"
            : "fill-current text-yellow-300 hover:text-yellow-400";

        return (
          <span key={i} onClick={() => handleChange(r)}>
            <Star className={`cursor-pointer ${sClass}`} />
          </span>
        );
      })}
    </span>
  );
};
