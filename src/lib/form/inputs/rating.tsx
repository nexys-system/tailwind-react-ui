import React from "react";

import { InputProps } from "form/type";
import { Star } from "../../icons";

export type Rating = 1 | 2 | 3 | 4 | 5;

export default ({ value, onChange, disabled }: InputProps<Rating>) => {
  const classes = "cursor-pointer";
  const ratings: Rating[] = [1, 2, 3, 4, 5];

  return (
    <span>
      {ratings.map((r) => {
        const sClass =
          !value || value < r
            ? "text-coolGray-300 hover:text-coolGray-400"
            : "fill-current text-yellow-300 hover:text-yellow-400";

        return (
          <span onClick={disabled !== true ? () => onChange(r) : undefined}>
            <Star className={`${sClass} ${classes}`} />
          </span>
        );
      })}
    </span>
  );
};
