import React, {useState} from "../../_snowpack/pkg/react.js";
import RatingUI from "../../lib/form/inputs/rating.js";
export default () => {
  const [r, setR] = useState();
  return /* @__PURE__ */ React.createElement("div", {
    className: "font-extralight"
  }, /* @__PURE__ */ React.createElement("h1", null, "Rating"), /* @__PURE__ */ React.createElement(RatingUI, {
    rating: r,
    onChange: setR
  }), " ", r);
};
