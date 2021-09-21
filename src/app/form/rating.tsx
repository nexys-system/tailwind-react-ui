import React, { useState } from "react";
import RatingUI, { Rating } from "../../lib/form/inputs/rating";
export default () => {
  const [r, setR] = useState<Rating | undefined>();
  return (
    <div className="font-extralight">
      <h1>Rating</h1>
      <RatingUI rating={r} onChange={setR} /> {r}
    </div>
  );
};
