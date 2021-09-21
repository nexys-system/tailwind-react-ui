import React from "react";
import { Star } from "../icons";

type Rating = 0 | 1 | 2 | 3 | 4 | 5;
interface Props {
  rating?: Rating;
  onChange?: (r: Rating) => void;
}

export default ({ rating, onChange }: Props) => {
  const classes = "cursor-pointer";
  const ratings: Rating[] = [1, 2, 3, 4, 5];
  return (
    <span>
      {ratings.map((r) => {
        const sClass =
          !rating || rating < r
            ? "text-coolGray-300 hover:text-coolGray-400"
            : "fill-current text-yellow-300 hover:text-yellow-400";

        return (
          <span onClick={() => onChange && onChange(r)}>
            <Star className={`${sClass} ${classes}`} />
          </span>
        );
      })}
    </span>
  );
};
