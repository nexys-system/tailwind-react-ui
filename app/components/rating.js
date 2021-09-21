import React, {useState} from "../../_snowpack/pkg/react.js";
import Rating from "../../lib/form/inputs/rating.js";
export default () => {
  const [r, setR] = useState(0);
  return /* @__PURE__ */ React.createElement("div", {
    className: "font-extralight"
  }, /* @__PURE__ */ React.createElement("h1", null, "Rating"), /* @__PURE__ */ React.createElement(Rating, {
    rating: r,
    onChange: (v) => setR(v)
  }), " ", r);
};
