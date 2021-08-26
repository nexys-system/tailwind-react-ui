import React from "react";

type Rating = 0 | 1 | 2 | 3 | 4 | 5;
interface Props {
  rating?: Rating;
  onChange?: (r: Rating) => void;
}

export default ({ rating, onChange }: Props) => {
  const classes = "p-2 text-xl cursor-pointer fas fa-star";
  const ratings: Rating[] = [1, 2, 3, 4, 5];
  return (
    <span>
      {ratings.map((r) => {
        const sClass =
          !rating || rating < r
            ? "text-coolGray-300 hover:text-coolGray-400"
            : "text-yellow-300 hover:text-yellow-400";

        return (
          <i
            onClick={() => onChange && onChange(r)}
            className={`${sClass} ${classes}`}
          />
        );
      })}
    </span>
  );
};
