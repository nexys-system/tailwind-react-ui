import React, { useState } from "react";
import Rating from "../../lib/form/inputs/rating";
export default () => {
  const [r, setR] = useState<1 | 2 | 3 | 4 | 5 | 0>(0);
  return (
    <div className="font-extralight">
      <h1>Rating</h1>
      <Rating rating={r} onChange={(v) => setR(v)} /> {r}
    </div>
  );
};
